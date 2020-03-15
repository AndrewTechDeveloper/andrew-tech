import { action } from 'typesafe-actions';
import { BlogsActionTypes, Blog } from 'store/blogs/types';

export const changeEditorState = () => action(BlogsActionTypes.CHANGE_EDITOR_STATE);
