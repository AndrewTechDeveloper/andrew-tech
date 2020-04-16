import { all, select, put, takeLatest, takeEvery } from 'redux-saga/effects'
import { EditorState, convertFromRaw, AtomicBlockUtils, RichUtils } from 'draft-js'
import { BlogsActionTypes } from 'store/blogs/types'
import * as blogsActions from 'store/blogs/actions'
import { saveRequest, updateRequest, fetchRequest, fetchAllRequest } from 'store/blogs/api'

function* handleSave() {
  const state = yield select()
  try {
    yield saveRequest(state.blogs)
    yield put(blogsActions.createToast({ message: 'ブログが作成されました！', severity: 'success', isOpen: true }))
  } catch (err) {
    yield put(blogsActions.createToast({ message: 'ブログの保存に失敗しました', severity: 'error', isOpen: true }))
  }
}
function* handleUpdate() {
  const state = yield select()
  try {
    yield updateRequest(state.blogs)
    yield put(blogsActions.createToast({ message: 'ブログが更新されました！', severity: 'success', isOpen: true }))
  } catch (err) {
    yield put(blogsActions.createToast({ message: 'ブログの保存に失敗しました', severity: 'error', isOpen: true }))
  }
}
function* handleFetch() {
  try {
    const res = yield fetchRequest()
    if (res.isSuccess) {
      const content = convertFromRaw(JSON.parse(res.data.blog.content))
      res.data.blog.content = EditorState.createWithContent(content)
      yield put(blogsActions.fetchSuccess(res.data.blog))
    } else {
      yield put(blogsActions.createToast({ message: 'ブログの取得に失敗しました。', severity: 'error', isOpen: true }))
    }
  } catch (err) {
    yield put(blogsActions.createToast({ message: 'ブログの取得に失敗しました。', severity: 'error', isOpen: true }))
  }
}
function* handleFetchAll() {
  try {
    const res = yield fetchAllRequest()
    if (res.isSuccess) {
      yield put(blogsActions.fetchAllSuccess(res.data.blogs))
    } else {
      yield put(blogsActions.createToast({ message: 'ブログの取得に失敗しました。', severity: 'error', isOpen: true }))
    }
  } catch (err) {
    yield put(blogsActions.createToast({ message: 'ブログの取得に失敗しました。', severity: 'error', isOpen: true }))
  }
}
function* handleChangeStyle() {
  const state = yield select()
  const style = state.blogs.style
  const editorState = state.blogs.editorState
  let newEditorState
  if (style === 'BOLD' || style === 'ITALIC' || style === 'UNDERLINE') {
    newEditorState = RichUtils.toggleInlineStyle(editorState, style)
  } else {
    newEditorState = RichUtils.toggleBlockType(editorState, style)
  }
  yield put(blogsActions.changeEditorState(newEditorState))
}
function* handleInsertImage() {
  const state = yield select()
  const editorState = state.blogs.editorState
  const contentState = editorState.getCurrentContent()
  const contentStateWithEntity = contentState.createEntity('image', 'IMMUTABLE', { src: state.blogs.image })
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
  const setEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity })
  const newEditorState = AtomicBlockUtils.insertAtomicBlock(setEditorState, entityKey, ' ')
  yield put(blogsActions.changeEditorState(newEditorState))
}

function* blogsSaga() {
  yield all([
    takeLatest(BlogsActionTypes.SAVE_REQUEST, handleSave),
    takeLatest(BlogsActionTypes.UPDATE_REQUEST, handleUpdate),
    takeEvery(BlogsActionTypes.FETCH_REQUEST, handleFetch),
    takeEvery(BlogsActionTypes.FETCH_ALL_REQUEST, handleFetchAll),
    takeEvery(BlogsActionTypes.INSERT_IMAGE_REQUEST, handleInsertImage),
    takeEvery(BlogsActionTypes.CHANGE_STYLE, handleChangeStyle)
  ])
}

export default blogsSaga
