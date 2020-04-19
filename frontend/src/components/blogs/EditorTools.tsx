import * as React from 'react'
import * as blogsActions from 'store/blogs/actions'
import { EditorState, RichUtils, AtomicBlockUtils } from 'draft-js'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

interface EditorToolsProps {
  editorState: EditorState
  changeEditorState: typeof blogsActions.changeEditorState
}

const EditorTools: React.FC<EditorToolsProps> = props => {
  const { editorState, changeEditorState } = props

  const changeStyle = (style: string) => {
    let newEditorState
    if (style === 'BOLD' || style === 'ITALIC' || style === 'UNDERLINE') {
      newEditorState = RichUtils.toggleInlineStyle(editorState, style)
    } else {
      newEditorState = RichUtils.toggleBlockType(editorState, style)
    }
    changeEditorState(newEditorState)
  }

  const insertImage = () => {
    const contentState = editorState.getCurrentContent()
    const contentStateWithEntity = contentState.createEntity('image', 'IMMUTABLE', { src: image })
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
    const setEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity })
    const newEditorState = AtomicBlockUtils.insertAtomicBlock(setEditorState, entityKey, ' ')
    changeEditorState(newEditorState)
  }
  const [image, changeImage] = React.useState<string>('')
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeImage(e.target.value)
  }

  return (
    <div className="my-4">
      <div>
        <button onClick={() => changeStyle('unstyled')}>reset</button>
      </div>
      <div>
        <button onClick={() => changeStyle('BOLD')}>B</button>
        <button onClick={() => changeStyle('ITALIC')}>I</button>
        <button onClick={() => changeStyle('UNDERLINE')}>U</button>
        <button onClick={() => changeStyle('blockquote')}>bq</button>
        <button onClick={() => changeStyle('code-block')}>code</button>
        <button onClick={() => changeStyle('atomic')}>atomic</button>
        <button onClick={() => changeStyle('unordered-list-item')}>ul</button>
        <button onClick={() => changeStyle('ordered-list-item')}>ol</button>
      </div>
      <div>
        <button onClick={() => changeStyle('paragraph')}>p</button>
        <button onClick={() => changeStyle('header-one')}>H1</button>
        <button onClick={() => changeStyle('header-two')}>H2</button>
        <button onClick={() => changeStyle('header-three')}>H3</button>
        <button onClick={() => changeStyle('header-four')}>H4</button>
        <button onClick={() => changeStyle('header-five')}>H5</button>
        <button onClick={() => changeStyle('header-six')}>H6</button>
      </div>
      <div>
        <TextField id="standard-basic" label="image url" value={image} onChange={handleChangeImage} />
        <Button color="primary" onClick={insertImage}>
          Insert Image
        </Button>
      </div>
    </div>
  )
}

export default EditorTools
