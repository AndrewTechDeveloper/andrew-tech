import * as React from 'react'
import * as blogsActions from 'store/blogs/actions'
import { EditorState, RichUtils, AtomicBlockUtils } from 'draft-js'
import {
  TextField,
  Button,
  Chip,
  Avatar,
} from '@material-ui/core'
import { SaveButton } from 'components/blogs/Button'

interface EditorToolsProps {
  editorState: EditorState
  changeEditorState: typeof blogsActions.changeEditorState
  saveRequest: typeof blogsActions.saveRequest
}

const EditorTools: React.FC<EditorToolsProps> = props => {
  const { editorState, changeEditorState, saveRequest } = props

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
    <div className='editor-tools'>
      <Chip variant="outlined" avatar={<Avatar>Reset</Avatar>} label="RESET" onClick={() => changeStyle('unstyled')}/>
      <br/>
      <Chip variant="outlined" avatar={<Avatar>B</Avatar>} label="BOLD" onClick={() => changeStyle('BOLD')}/>
      <br/>
      <Chip variant="outlined" avatar={<Avatar>I</Avatar>} label="ITALIC" onClick={() => changeStyle('ITALIC')}/>
      <br/>
      <Chip variant="outlined" avatar={<Avatar>U</Avatar>} label="UNDERLINE" onClick={() => changeStyle('UNDERLINE')}/>
      <br/>
      <Chip variant="outlined" avatar={<Avatar>BQ</Avatar>} label="blockquote" onClick={() => changeStyle('blockquote')}/>
      <br/>
      <Chip variant="outlined" avatar={<Avatar>code</Avatar>} label="code-block" onClick={() => changeStyle('code-block')}/>
      <br/>
      <Chip variant="outlined" avatar={<Avatar>UL</Avatar>} label="ul" onClick={() => changeStyle('unordered-list-item')}/>
      <br/>
      <Chip variant="outlined" avatar={<Avatar>OL</Avatar>} label="ol" onClick={() => changeStyle('ordered-list-item')}/>
      <br/>
      <Chip variant="outlined" avatar={<Avatar>H2</Avatar>} label="title" onClick={() => changeStyle('header-two')}/>
      <br/>
      <Chip variant="outlined" avatar={<Avatar>H3</Avatar>} label="subtitle" onClick={() => changeStyle('header-three')}/>
      <br/>
      <Chip variant="outlined" avatar={<Avatar>H6</Avatar>} label="text" onClick={() => changeStyle('header-six')}/>
      <br/>
      <TextField id="standard-basic" label="image url" value={image} onChange={handleChangeImage} />
      <br/>
      <Button color="primary" onClick={insertImage}>Insert Image</Button>
      <br/>
      <SaveButton {...props} />
    </div>
  )
}

export default EditorTools
