import { all, select, put, takeLatest, takeEvery } from 'redux-saga/effects'
import { EditorState, convertFromRaw } from 'draft-js'
import { BlogsActionTypes } from 'store/blogs/types'
import * as blogsActions from 'store/blogs/actions'
import { saveRequest, fetchRequest, fetchAllRequest } from 'store/blogs/api'

function* handleSave() {
  try {
    const state = yield select()
    const blogs = state.blogs
    if (blogs.title !== '' && blogs.description !== '' && blogs.status !== 0){
      yield saveRequest(blogs)
      yield put(blogsActions.createToast({ message: 'ブログが作成されました！', severity: 'success', isOpen: true }))
    } else {
      yield put(blogsActions.createToast({ message: '入力されていない値があります', severity: 'error', isOpen: true }))
    }
  } catch (err) {
    yield put(blogsActions.createToast({ message: 'ブログの保存に失敗しました', severity: 'error', isOpen: true }))
  }
}
function* handleFetch() {
  try {
    const state = yield select()
    const res = yield fetchRequest(state.blogs)
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

function* blogsSaga() {
  yield all([
    takeLatest(BlogsActionTypes.SAVE_REQUEST, handleSave),
    takeEvery(BlogsActionTypes.FETCH_REQUEST, handleFetch),
    takeEvery(BlogsActionTypes.FETCH_ALL_REQUEST, handleFetchAll)
  ])
}

export default blogsSaga
