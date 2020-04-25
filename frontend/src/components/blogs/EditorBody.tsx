import * as React from 'react'
import Editor from 'draft-js-plugins-editor'
import { EditorState, RichUtils } from 'draft-js'
import * as blogsActions from 'store/blogs/actions'
import createImagePlugin from 'draft-js-image-plugin'

interface EditorBodyProps {
  editorState: EditorState
  changeEditorState: typeof blogsActions.changeEditorState
}
const EditorBody: React.FC<EditorBodyProps> = props => {
  const { editorState, changeEditorState } = props
  const imagePlugin = createImagePlugin()
  const handleKeyCommand = (command: string, editorState: EditorState) => {
    let state = editorState;
    if (command === 'backspace-word') {
      state = RichUtils.toggleBlockType(editorState, 'unstyled')
    }
    const newState = RichUtils.handleKeyCommand(state, command)
    return newState ? 'handled' : 'not-handled'
  }
  return (
    <div className='editor'>
      <Editor
        editorState={editorState}
        onChange={changeEditorState}
        handleKeyCommand={handleKeyCommand}
        placeholder="Enter some text..."
        plugins={[imagePlugin]}
      />
    </div>
  )
}

export default EditorBody
