import { action } from 'typesafe-actions'
import { EditorState } from 'draft-js'
import { BlogsActionTypes, BlogsState, Blog } from 'store/blogs/types'

export const setId = (id: number | unknown) => action(BlogsActionTypes.SET_ID, id)
export const setStatus = (status: number | unknown) => action(BlogsActionTypes.SET_STATUS, status)
export const setEditorState = (editorState: EditorState) => action(BlogsActionTypes.SET_EDITOR_STATE, editorState)
export const setTitle = (title: string) => action(BlogsActionTypes.SET_TITLE, title)
export const setDescription = (description: string) => action(BlogsActionTypes.SET_DESCRIPTION, description)
export const setOgImage = (ogImage: string) => action(BlogsActionTypes.SET_OG_IMAGE, ogImage)
export const setToast = (toast: { message?: string; severity?: 'success' | 'info' | 'warning' | 'error' | undefined; isOpen?: boolean }) =>
  action(BlogsActionTypes.SET_TOAST, toast)

export const fetchSuccess = (data: BlogsState) => action(BlogsActionTypes.FETCH_SUCCESS, data)
export const fetchAllSuccess = (data: Blog[]) => action(BlogsActionTypes.FETCH_ALL_SUCCESS, data)
export const fetchRequest = () => action(BlogsActionTypes.FETCH_REQUEST)
export const fetchAllRequest = () => action(BlogsActionTypes.FETCH_ALL_REQUEST)
export const saveRequest = () => action(BlogsActionTypes.SAVE_REQUEST)
