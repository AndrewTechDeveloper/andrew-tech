import { action } from 'typesafe-actions'
import { BlogsActionTypes } from 'store/blogs/types'
import { EditorState } from 'draft-js';

export const changeEditorState =
  (editorState: EditorState) =>
  action(BlogsActionTypes.CHANGE_EDITOR_STATE, editorState)
