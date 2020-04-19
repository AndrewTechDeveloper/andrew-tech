import { Reducer } from 'redux'
import { BlogsState, BlogsActionTypes } from 'store/blogs/types'
import { EditorState } from 'draft-js'

export const initialState: BlogsState = {
  id: 0,
  title: '',
  ogImage: '',
  image: '',
  description: '',
  editorState: EditorState.createEmpty(),
  style: '',
  status: 0,
  data: [],
  toast: { message: '', severity: 'info', isOpen: false },
  loading: false
}

const reducer: Reducer<BlogsState> = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case BlogsActionTypes.FETCH_REQUEST:
    case BlogsActionTypes.FETCH_ALL_REQUEST:
    case BlogsActionTypes.SAVE_REQUEST: {
      return { ...state, loading: true }
    }
    case BlogsActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        id: action.payload.id,
        editorState: action.payload.content,
        title: action.payload.title,
        description: action.payload.description,
        ogImage: action.payload.og_image,
        status: action.payload.status,
        loading: false
      }
    }
    case BlogsActionTypes.FETCH_ALL_SUCCESS: {
      return { ...state, data: action.payload, loading: false }
    }
    case BlogsActionTypes.CHANGE_EDITOR_STATE: {
      return { ...state, editorState: action.payload }
    }
    case BlogsActionTypes.CHANGE_STYLE: {
      return { ...state, style: action.payload }
    }
    case BlogsActionTypes.CHANGE_TITLE: {
      return { ...state, title: action.payload }
    }
    case BlogsActionTypes.CHANGE_DESCRIPTION: {
      return { ...state, description: action.payload }
    }
    case BlogsActionTypes.CHANGE_OG_IMAGE: {
      return { ...state, ogImage: action.payload }
    }
    case BlogsActionTypes.CHANGE_IMAGE: {
      return { ...state, image: action.payload }
    }
    case BlogsActionTypes.SELECT_STATUS: {
      return { ...state, status: action.payload }
    }
    case BlogsActionTypes.SELECT_BLOG: {
      return { ...state, id: action.payload }
    }
    case BlogsActionTypes.CREATE_TOAST: {
      return { ...state, toast: action.payload }
    }
    case BlogsActionTypes.DELETE_TOAST: {
      return { ...state, toast: { isOpen: false } }
    }
    default: {
      return state
    }
  }
}

export { reducer as blogsReducer }
