import { EditorState } from 'draft-js'

export enum BlogsActionTypes {
  FETCH_REQUEST = '@@blogs/FETCH_REQUEST',
  FETCH_ALL_REQUEST = '@@blogs/FETCH_ALL_REQUEST',
  FETCH_SUCCESS = '@@blogs/FETCH_SUCCESS',
  FETCH_ALL_SUCCESS = '@@blogs/FETCH_ALL_SUCCESS',
  SAVE_REQUEST = '@@blogs/SAVE_REQUEST',
  CHANGE_EDITOR_STATE = '@@blogs/CHANGE_EDITOR_STATE',
  CHANGE_TITLE = '@@blogs/CHANGE_TITLE',
  CHANGE_DESCRIPTION = '@@blogs/CHANGE_DESCRIPTION',
  CHANGE_OG_IMAGE = '@@blogs/CHANGE_OG_IMAGE',
  SELECT_STATUS = '@@blogs/SELECT_STATUS',
  SELECT_BLOG = '@@blogs/SELECT_BLOG',
  CREATE_TOAST = '@@blogs/CREATE_TOAST',
  DELETE_TOAST = '@@blogs/DELETE_TOAST'
}

export interface Blog extends ApiResponse {
  id: number
  title: string
  og_image: string
  description: string
  content: string
  status: string
  created_at: string
  updated_at: string
}

export type ApiResponse = Record<string, any>

export interface BlogsState {
  readonly id: number
  readonly editorState: EditorState
  readonly style: string
  readonly ogImage: string
  readonly title: string
  readonly description: string
  readonly status: string
  readonly data: Blog[]
  readonly createdAt: string
  readonly updatedAt: string
  readonly loading: boolean
  readonly toast: { message: string; severity: 'success' | 'info' | 'warning' | 'error' | undefined; isOpen: boolean }
}
