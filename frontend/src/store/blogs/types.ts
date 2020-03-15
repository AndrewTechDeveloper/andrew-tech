export interface Blog {
  editorState: number
}

export enum BlogsActionTypes {
  CHANGE_EDITOR_STATE = '@@blogs/CHANGE_EDITOR_STATE'
}

export interface BlogsState {
  readonly editorState: number
}
