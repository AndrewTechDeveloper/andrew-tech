import * as React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import * as blogsActions from 'store/blogs/actions'
import { Blog } from 'store/blogs/types'
import { BlogsSelect, OgImageForm, TitleForm, DescriptionForm, StatusSelect } from 'components/blogs/Form'
import { FetchButton, SaveButton } from 'components/blogs/Button'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import Toast from 'components/layouts/Toast'
import { ImageCard } from 'components/blogs/Card'
import { Container, Card, Typography, Divider, Chip } from '@material-ui/core'

interface PropsFromState {
  id: number
  title: string
  description: string
  ogImage: string
  status: string
  data: Blog[]
  editorState: EditorState
  updatedAt: string
  toast: { message: string; severity: 'success' | 'info' | 'warning' | 'error' | undefined; isOpen: boolean }
}
interface PropsFromDispatch {
  changeEditorState: typeof blogsActions.changeEditorState
  changeTitle: typeof blogsActions.changeTitle
  changeDescription: typeof blogsActions.changeDescription
  changeOgImage: typeof blogsActions.changeOgImage
  selectBlog: typeof blogsActions.selectBlog
  selectStatus: typeof blogsActions.selectStatus
  fetchRequest: typeof blogsActions.fetchRequest
  fetchAllRequest: typeof blogsActions.fetchAllRequest
  saveRequest: typeof blogsActions.saveRequest
  deleteToast: typeof blogsActions.deleteToast
}
type AllProps = PropsFromState & PropsFromDispatch

const mapStateToProps = ({ blogs }: AppState) => ({
  id: blogs.id,
  ogImage: blogs.ogImage,
  title: blogs.title,
  description: blogs.description,
  status: blogs.status,
  data: blogs.data,
  editorState: blogs.editorState,
  updatedAt: blogs.updatedAt,
  toast: blogs.toast
})
const mapDispatchToProps = {
  changeEditorState: blogsActions.changeEditorState,
  changeTitle: blogsActions.changeTitle,
  changeDescription: blogsActions.changeDescription,
  changeOgImage: blogsActions.changeOgImage,
  selectBlog: blogsActions.selectBlog,
  selectStatus: blogsActions.selectStatus,
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
    const { id, title, description, status, editorState, updatedAt, changeEditorState } = this.props
    return (
      <>
        <Toast {...this.props} />
        <Container maxWidth="md" className="my-4 w-25 h-75 d-md-flex position-fixed">
          <Card className="overflow-auto p-2">
            <div className="my-4 d-flex">
              <BlogsSelect {...this.props} />
              <FetchButton {...this.props} />
            </div>
            <Divider />
            <div className="my-4">
              <Typography variant="subtitle1" gutterBottom>
                ID: {id || '未選択'}
              </Typography>
            </div>
            <div className="my-4">
              <TitleForm {...this.props} />
            </div>
            <div className="my-4">
              <DescriptionForm {...this.props} />
            </div>
            <div className="my-4">
              <OgImageForm {...this.props} />
            </div>
            <div className="my-4">
              <StatusSelect {...this.props} />
            </div>
            <div className="my-4">
              <SaveButton {...this.props} />
            </div>
          </Card>
        </Container>
        <Container maxWidth="md" className="my-4 blog min-vh-100">
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            {updatedAt}
          </Typography>
          <Chip variant="outlined" label={status} />
          <Typography variant="subtitle1" gutterBottom>
            {description}
          </Typography>
          <ImageCard {...this.props} />
          <Divider className="my-4" />
          <Editor editorState={editorState} onEditorStateChange={changeEditorState} />
        </Container>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogsIndexPage)
