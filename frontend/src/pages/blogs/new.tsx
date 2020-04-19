import * as React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import * as blogsActions from 'store/blogs/actions'
import { Blog } from 'store/blogs/types'
import { EditorState } from 'draft-js'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Draft from 'components/blogs/EditorBody'
import DraftTools from 'components/blogs/EditorTools'
import Divider from '@material-ui/core/Divider'
import { BlogsSelect, OgImageForm, TitleForm, DescriptionForm, StatusSelect } from 'components/blogs/Form'
import { JumpToEditButton, SaveButton } from 'components/blogs/Button'
import Toast from 'components/layouts/Toast'

interface PropsFromState {
  id: number
  title: string
  description: string
  ogImage: string
  image: string
  status: number
  data: Blog[]
  editorState: EditorState
  toast: { message: string; severity: 'success' | 'info' | 'warning' | 'error' | undefined; isOpen: boolean }
}
interface PropsFromDispatch {
  changeEditorState: typeof blogsActions.changeEditorState
  changeTitle: typeof blogsActions.changeTitle
  changeDescription: typeof blogsActions.changeDescription
  changeImage: typeof blogsActions.changeImage
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
  image: blogs.image,
  title: blogs.title,
  description: blogs.description,
  status: blogs.status,
  data: blogs.data,
  editorState: blogs.editorState,
  toast: blogs.toast
})
const mapDispatchToProps = {
  changeEditorState: blogsActions.changeEditorState,
  changeTitle: blogsActions.changeTitle,
  changeDescription: blogsActions.changeDescription,
  changeOgImage: blogsActions.changeOgImage,
  changeImage: blogsActions.changeImage,
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
    const { title, description, ogImage } = this.props
    return (
      <>
        <Toast {...this.props} />
        <Container maxWidth="md" className="my-4">
          <div className="my-4 d-flex">
            <BlogsSelect {...this.props} />
            <JumpToEditButton {...this.props} />
          </div>
          <Divider />
          <div className="my-4">
            <TitleForm {...this.props} />
            <Typography variant="h2" gutterBottom>
              {title}
            </Typography>
          </div>
          <div className="my-4">
            <DescriptionForm {...this.props} />
            <Typography variant="subtitle1" gutterBottom>
              {description}
            </Typography>
          </div>
          <div className="my-4 d-flex">
            <OgImageForm {...this.props} />
            <img src={ogImage} />
          </div>
          <div className="my-4 d-flex">
            <StatusSelect {...this.props} />
          </div>
          <div className="my-4">
            <DraftTools {...this.props} />
            <SaveButton {...this.props} />
          </div>
          <Draft {...this.props} />
        </Container>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogsIndexPage)
