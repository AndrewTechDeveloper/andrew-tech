import * as React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import * as blogsActions from 'store/blogs/actions'
import { Blog } from 'store/blogs/types'
import { EditorState } from 'draft-js'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { UpdateButton } from 'components/blogs/Button'
import { TitleForm } from 'components/blogs/Form'
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
  changeTitle: typeof blogsActions.changeTitle
  changeImage: typeof blogsActions.changeImage
  selectBlog: typeof blogsActions.selectBlog
  fetchRequest: typeof blogsActions.fetchRequest
  fetchAllRequest: typeof blogsActions.fetchAllRequest
  saveRequest: typeof blogsActions.saveRequest
  updateRequest: typeof blogsActions.updateRequest
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
  changeTitle: blogsActions.changeTitle,
  changeImage: blogsActions.changeImage,
  selectBlog: blogsActions.selectBlog,
  fetchRequest: blogsActions.fetchRequest,
  fetchAllRequest: blogsActions.fetchAllRequest,
  saveRequest: blogsActions.saveRequest,
  updateRequest: blogsActions.updateRequest,
  deleteToast: blogsActions.deleteToast
}

class BlogsEditPage extends React.Component<AllProps> {
  componentDidMount() {
    this.props.fetchRequest()
  }

  render() {
    const { title } = this.props
    return (
      <>
        <Toast {...this.props} />
        <Container maxWidth="md" className="my-4">
          <div className="my-4">
            <TitleForm {...this.props} />
            <Typography variant="h2" gutterBottom>
              {title}
            </Typography>
          </div>
          <div className="my-4">
            <UpdateButton {...this.props} />
          </div>
        </Container>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogsEditPage)
