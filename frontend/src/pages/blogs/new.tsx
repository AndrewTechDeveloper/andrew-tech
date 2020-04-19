import * as React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import * as blogsActions from 'store/blogs/actions'
import { Blog } from 'store/blogs/types'
import { EditorState } from 'draft-js'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography'
import EditorBody from 'components/blogs/EditorBody'
import EditorTools from 'components/blogs/EditorTools'
import Divider from '@material-ui/core/Divider'
import { BlogsSelect, OgImageForm, TitleForm, DescriptionForm, StatusSelect } from 'components/blogs/Form'
import { FetchButton, SaveButton } from 'components/blogs/Button'
import Toast from 'components/layouts/Toast'

interface PropsFromState {
  id: number
  title: string
  description: string
  ogImage: string
  status: number
  data: Blog[]
  editorState: EditorState
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
    const { title, description, ogImage } = this.props
    return (
      <>
        <Toast {...this.props} />
        <Card className='w-25 position-fixed fixed-bottom float-right'>
          <div className="my-4">
            <EditorTools {...this.props} />
            <SaveButton {...this.props} />
          </div>
        </Card>
        <div className="my-4 d-flex">
          <BlogsSelect {...this.props} />
          <FetchButton {...this.props} />
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
        </div>
        <div className="my-4 d-flex">
          <OgImageForm {...this.props} />
          <img src={ogImage} />
        </div>
        <div className="my-4 d-flex">
          <StatusSelect {...this.props} />
        </div>
        <Container maxWidth="md" className="my-4">
          <EditorBody {...this.props} />
        </Container>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogsIndexPage)
