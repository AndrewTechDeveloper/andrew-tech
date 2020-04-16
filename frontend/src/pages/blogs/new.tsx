import * as React from 'react'
import Editor from 'draft-js-plugins-editor'
import createImagePlugin from 'draft-js-image-plugin'
import { AppState } from 'store'
import { connect } from 'react-redux'
import * as blogsActions from 'store/blogs/actions'
import { Blog } from 'store/blogs/types'
import { EditorState, RichUtils } from 'draft-js'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import EditorTools from 'components/blogs/EditorTools'
import { BlogsSelect, TitleForm } from 'components/blogs/Form'
import { JumpToEditButton, SaveButton } from 'components/blogs/Button'
import Toast from 'components/layouts/Toast'

interface PropsFromState {
  id: number
  title: string
  image: string
  data: Blog[]
  editorState: EditorState
  toast: { message: string; severity: 'success' | 'info' | 'warning' | 'error' | undefined; isOpen: boolean }
}
interface PropsFromDispatch {
  changeEditorState: typeof blogsActions.changeEditorState
  changeStyle: typeof blogsActions.changeStyle
  changeTitle: typeof blogsActions.changeTitle
  changeImage: typeof blogsActions.changeImage
  insertImageRequest: typeof blogsActions.insertImageRequest
  selectBlog: typeof blogsActions.selectBlog
  fetchRequest: typeof blogsActions.fetchRequest
  fetchAllRequest: typeof blogsActions.fetchAllRequest
  saveRequest: typeof blogsActions.saveRequest
  deleteToast: typeof blogsActions.deleteToast
}
type AllProps = PropsFromState & PropsFromDispatch

const mapStateToProps = ({ blogs }: AppState) => ({
  id: blogs.id,
  image: blogs.image,
  title: blogs.title,
  data: blogs.data,
  editorState: blogs.editorState,
  toast: blogs.toast
})
const mapDispatchToProps = {
  changeEditorState: blogsActions.changeEditorState,
  changeStyle: blogsActions.changeStyle,
  changeTitle: blogsActions.changeTitle,
  changeImage: blogsActions.changeImage,
  insertImageRequest: blogsActions.insertImageRequest,
  selectBlog: blogsActions.selectBlog,
  fetchRequest: blogsActions.fetchRequest,
  fetchAllRequest: blogsActions.fetchAllRequest,
  saveRequest: blogsActions.saveRequest,
  deleteToast: blogsActions.deleteToast
}

class BlogsIndexPage extends React.Component<AllProps> {
  componentDidMount() {
    this.props.fetchAllRequest()
  }

  render() {
    const { editorState, title, changeEditorState } = this.props
    const imagePlugin = createImagePlugin()
    const handleKeyCommand = (command: string, editorState: EditorState) => {
      const newState = RichUtils.handleKeyCommand(editorState, command)
      if (newState) {
        return 'handled'
      }
      return 'not-handled'
    }
    return (
      <>
        <Toast {...this.props} />
        <Container maxWidth="md" className="my-4">
          <div className="my-4">
            <TitleForm {...this.props} />
          </div>
          <Typography variant="h2" gutterBottom>
            {title}
          </Typography>
          <div>
            <BlogsSelect {...this.props} />
            <JumpToEditButton {...this.props} />
          </div>
          <div className="my-4">
            <EditorTools {...this.props} />
            <SaveButton {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(BlogsIndexPage)
