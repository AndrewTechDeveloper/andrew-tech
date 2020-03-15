import { Reducer } from 'redux'
import { BlogsState, BlogsActionTypes } from 'store/blogs/types'

export const initialState: BlogsState = {
  editorState: 0
}

const reducer: Reducer<BlogsState> = (state = initialState, action) => {
  switch (action.type) {
    case BlogsActionTypes.CHANGE_EDITOR_STATE: {
      return { ...state, editorState: action.editorState }
    }
    default: {
      return state
    }
  }
}

export { reducer as blogsReducer }
