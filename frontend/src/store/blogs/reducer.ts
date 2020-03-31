import { Reducer } from 'redux'
import { BlogsState, BlogsActionTypes } from 'store/blogs/types'
import { EditorState } from 'draft-js';

export const initialState: BlogsState = {
  editorState: EditorState.createEmpty(),
}

const reducer: Reducer<BlogsState> = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case BlogsActionTypes.CHANGE_EDITOR_STATE: {
      return { ...state, editorState: action.payload }
    }
    default: {
      return state
    }
  }
}

export { reducer as blogsReducer }
