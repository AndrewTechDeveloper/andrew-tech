import { action } from 'typesafe-actions'
import { EditorState } from 'draft-js'
import { BlogsActionTypes, BlogsState, Blog } from 'store/blogs/types'

export const selectBlog = (event: React.ChangeEvent<{ value: unknown }>) =>
  action(BlogsActionTypes.SELECT_BLOG, event.target.value as number)
export const selectStatus = (event: React.ChangeEvent<{ value: unknown }>) =>
  action(BlogsActionTypes.SELECT_STATUS, event.target.value as number)
export const changeEditorState = (editorState: EditorState) => action(BlogsActionTypes.CHANGE_EDITOR_STATE, editorState)
export const changeStyle = (style: string) => action(BlogsActionTypes.CHANGE_STYLE, style)
export const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => action(BlogsActionTypes.CHANGE_TITLE, event.target.value)
export const changeDescription = (event: React.ChangeEvent<HTMLInputElement>) =>
  action(BlogsActionTypes.CHANGE_DESCRIPTION, event.target.value)
export const changeOgImage = (event: React.ChangeEvent<HTMLInputElement>) => action(BlogsActionTypes.CHANGE_OG_IMAGE, event.target.value)
export const changeImage = (event: React.ChangeEvent<HTMLInputElement>) => action(BlogsActionTypes.CHANGE_IMAGE, event.target.value)
export const createToast = (toast: { message: string; severity: 'success' | 'info' | 'warning' | 'error' | undefined; isOpen: boolean }) =>
  action(BlogsActionTypes.CREATE_TOAST, toast)
export const deleteToast = () => action(BlogsActionTypes.DELETE_TOAST)
export const fetchSuccess = (data: BlogsState) => action(BlogsActionTypes.FETCH_SUCCESS, data)
export const fetchAllSuccess = (data: Blog[]) => action(BlogsActionTypes.FETCH_ALL_SUCCESS, data)

export const fetchRequest = () => action(BlogsActionTypes.FETCH_REQUEST)
export const fetchAllRequest = () => action(BlogsActionTypes.FETCH_ALL_REQUEST)
export const saveRequest = () => action(BlogsActionTypes.SAVE_REQUEST)
export const updateRequest = () => action(BlogsActionTypes.UPDATE_REQUEST)
