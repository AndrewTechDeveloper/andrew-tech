import { EditorState } from 'draft-js'

export enum BlogsActionTypes {
  FETCH_REQUEST = '@@blogs/FETCH_REQUEST',
  FETCH_ALL_REQUEST = '@@blogs/FETCH_ALL_REQUEST',
  FETCH_SUCCESS = '@@blogs/FETCH_SUCCESS',
  FETCH_ALL_SUCCESS = '@@blogs/FETCH_ALL_SUCCESS',
  SAVE_REQUEST = '@@blogs/SAVE_REQUEST',
  SET_TOAST = '@@blogs/SET_TOAST',
  SET_EDITOR_STATE = '@@blogs/SET_EDITOR_STATE',
  SET_TITLE = '@@blogs/SET_TITLE',
  SET_DESCRIPTION = '@@blogs/SET_DESCRIPTION',
  SET_OG_IMAGE = '@@blogs/SET_OG_IMAGE',
  SET_STATUS = '@@blogs/SET_STATUS',
  SET_ID = '@@blogs/SET_ID',
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
