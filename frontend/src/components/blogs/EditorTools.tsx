import * as React from 'react'
import * as blogsActions from 'store/blogs/actions'
import { EditorState } from 'draft-js'
import { InsertImageButton } from 'components/blogs/Button'
import { ImageForm } from 'components/blogs/Form'

interface EditorToolsStateProps {
  image: string
  editorState: EditorState
  changeEditorState: typeof blogsActions.changeEditorState
  changeStyle: typeof blogsActions.changeStyle
  changeImage: typeof blogsActions.changeImage
  insertImageRequest: typeof blogsActions.insertImageRequest
}

const EditorTools: React.FC<EditorToolsStateProps> = props => {
  const { changeStyle } = props
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
        <ImageForm {...props} />
        <InsertImageButton {...props} />
      </div>
    </div>
  )
}

export default EditorTools
