import * as React from 'react'
import Editor from 'draft-js-plugins-editor';
import { EditorState, RichUtils } from 'draft-js';
import createImagePlugin from 'draft-js-image-plugin';
import { AppState } from 'store'
import { connect } from 'react-redux'
import * as blogsActions from 'store/blogs/actions'
import { InlineStyleButton, BlockTypeButton } from 'components/blogs/Button'
import Container from '@material-ui/core/Container';

interface PropsFromState {
  editorState: EditorState
}
interface PropsFromDispatch {
  changeEditorState: typeof blogsActions.changeEditorState
}
type AllProps = PropsFromState & PropsFromDispatch

const mapStateToProps = ({ blogs }: AppState) => ({
  editorState: blogs.editorState
})
const mapDispatchToProps = {
  changeEditorState: blogsActions.changeEditorState,
}

class BlogsIndexPage extends React.Component<AllProps> {
  public render() {
    const { editorState, changeEditorState } = this.props
    const imagePlugin = createImagePlugin();
    const changeInlineStyle = (style: string) => {
      changeEditorState(RichUtils.toggleInlineStyle(editorState, style));
    }
    const changeBlockType = (style: string) => {
      changeEditorState(RichUtils.toggleBlockType(editorState, style));
    }
    const handleKeyCommand = (command: string, editorState: EditorState) => {
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        changeEditorState(newState);
        return 'handled';
      }
      return 'not-handled';
    }
    return (
      <>
        <Container maxWidth="md" className='my-4'>
          <div className='mb-4'>
            <InlineStyleButton title="B" changeInlineStyle={() => changeInlineStyle("BOLD")}/>
            <InlineStyleButton title="I" changeInlineStyle={() => changeInlineStyle("ITALIC")}/>
            <InlineStyleButton title="U" changeInlineStyle={() => changeInlineStyle("UNDERLINE")}/>
            <BlockTypeButton title="bq" changeBlockType={() => changeBlockType("blockquote")}/>
            <BlockTypeButton title="code" changeBlockType={() => changeBlockType("code-block")}/>
            <BlockTypeButton title="atomic" changeBlockType={() => changeBlockType("atomic")}/>
            <BlockTypeButton title="ul" changeBlockType={() => changeBlockType("unordered-list-item")}/>
            <BlockTypeButton title="H1" changeBlockType={() => changeBlockType("header-one")}/>
            <BlockTypeButton title="H2" changeBlockType={() => changeBlockType("header-two")}/>
            <BlockTypeButton title="H3" changeBlockType={() => changeBlockType("header-three")}/>
            <BlockTypeButton title="H4" changeBlockType={() => changeBlockType("header-four")}/>
            <BlockTypeButton title="H5" changeBlockType={() => changeBlockType("header-five")}/>
            <BlockTypeButton title="H6" changeBlockType={() => changeBlockType("header-six")}/>
          </div>
          <Editor
            editorState={editorState}
            onChange={changeEditorState}
            handleKeyCommand={handleKeyCommand}
            placeholder="Enter some text..."
            plugins={[imagePlugin]}
          />
        </Container>
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogsIndexPage)
