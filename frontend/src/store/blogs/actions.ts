import { action } from 'typesafe-actions'
import { BlogsActionTypes } from 'store/blogs/types'

export const changeEditorState = () => action(BlogsActionTypes.CHANGE_EDITOR_STATE)
