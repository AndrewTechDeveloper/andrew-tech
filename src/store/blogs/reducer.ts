import { Reducer } from 'redux'
import { BlogsState, BlogsActionTypes } from 'store/blogs/types'
import { EditorState } from 'draft-js'

export const initialState: BlogsState = {
  id: 0,
  title: '',
  image: '',
  description: '',
  editorState: EditorState.createEmpty(),
  createdAt: '',
  updatedAt: '',
  style: '',
  status: '',
  data: [],
  toast: { message: '', severity: 'info', isOpen: false },
  loading: false
}

const reducer: Reducer<BlogsState> = (state = initialState, action) => {
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
        image: action.payload.image,
        status: action.payload.status,
        createdAt: action.payload.created_at,
        updatedAt: action.payload.updated_at,
        loading: false
      }
    }
    case BlogsActionTypes.FETCH_ALL_SUCCESS: {
      return { ...state, data: action.payload, loading: false }
    }
    case BlogsActionTypes.SET_EDITOR_STATE: {
      return { ...state, editorState: action.payload }
    }
    case BlogsActionTypes.SET_TITLE: {
      return { ...state, title: action.payload }
    }
    case BlogsActionTypes.SET_DESCRIPTION: {
      return { ...state, description: action.payload }
    }
    case BlogsActionTypes.SET_IMAGE: {
      return { ...state, image: action.payload }
    }
    case BlogsActionTypes.SET_STATUS: {
      return { ...state, status: action.payload }
    }
    case BlogsActionTypes.SET_ID: {
      return { ...state, id: action.payload }
    }
    case BlogsActionTypes.SET_TOAST: {
      return { ...state, toast: action.payload }
    }
    default: {
      return state
    }
  }
}

export { reducer as blogsReducer }
