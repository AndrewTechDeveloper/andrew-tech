import * as React from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js';
import { AppState } from 'store'
import { connect } from 'react-redux'
import * as blogsActions from 'store/blogs/actions'
import { InlineStyleButton, BlockTypeButton } from 'components/blogs/Button'
import 'draft-js/dist/Draft.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

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

class BlogsShowPage extends React.Component<AllProps> {
  public render() {
    const { editorState, changeEditorState } = this.props

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
        <Container maxWidth="md">
          <Typography variant="h1" component="h2" gutterBottom>
            h1. Heading
          </Typography>
        </Container>
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogsShowPage)
