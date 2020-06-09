import * as React from 'react'
import { History } from 'history'
import {
  EmailShareButton,
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  LineIcon,
  TwitterIcon
} from 'react-share'
import { EditorState } from 'draft-js'
import { AppState } from 'store'
import { connect } from 'react-redux'
import * as blogsActions from 'store/blogs/actions'
import { Editor } from 'react-draft-wysiwyg'
import { Blog } from 'store/blogs/types'
import { RelatedDecksCard } from 'components/blogs/Card'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'

interface PropsFromState {
  id: number
  editorState: EditorState
  title: string
  description: string
  image: string
  createdAt: string
  data: Blog[]
  history: History
}
interface PropsFromDispatch {
  setEditorState: typeof blogsActions.setEditorState
  setId: typeof blogsActions.setId
  fetchRequest: typeof blogsActions.fetchRequest
  setStatus: typeof blogsActions.setStatus
  fetchAllRequest: typeof blogsActions.fetchAllRequest
}
type AllProps = PropsFromState & PropsFromDispatch

const mapStateToProps = ({ blogs }: AppState) => ({
  id: blogs.id,
  editorState: blogs.editorState,
  title: blogs.title,
  description: blogs.description,
  image: blogs.image,
  createdAt: blogs.createdAt,
  data: blogs.data
})
const mapDispatchToProps = {
  setEditorState: blogsActions.setEditorState,
  setId: blogsActions.setId,
  fetchRequest: blogsActions.fetchRequest,
  setStatus: blogsActions.setStatus,
  fetchAllRequest: blogsActions.fetchAllRequest,
}

class BlogsShowPage extends React.Component<AllProps> {
  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.setId(this.props.history.location.pathname.split('/').pop())
    this.props.fetchRequest()
    this.props.setStatus('publish')
    this.props.fetchAllRequest()
  }
  componentDidUpdate() {
    if(this.props.id !== Number(window.location.href.split('/').pop())){
      window.scrollTo(0, 0)
      this.props.setId(this.props.history.location.pathname.split('/').pop())
      this.props.fetchRequest()
      this.props.setStatus('publish')
      this.props.fetchAllRequest()
    }
  }
  render() {
    const style = {
      image: {
        width: '60px',
        height: '60px'
      }
    }
    const shareUrl = window.location.origin + this.props.history.location.pathname
    const { editorState, title, description, image, createdAt, setEditorState } = this.props
    return (
      <>
        <Container maxWidth="md" className="my-5 blog min-vh-100">
          <div className="d-flex align-items-center">
            <Avatar alt="og image" src={image} className="mr-4" style={style.image} />
            <div>
              <Typography variant="h5" component="h1">
                {title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                {createdAt}
              </Typography>
            </div>
          </div>
          <Typography variant="subtitle1" gutterBottom className="mt-4">
            {description}
          </Typography>
          <Divider className="my-4" />
          <div className="my-2">
            <TwitterShareButton url={shareUrl}>
              <TwitterIcon round size={32} />
            </TwitterShareButton>
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon round size={32} />
            </FacebookShareButton>
            <EmailShareButton url={shareUrl}>
              <EmailIcon round size={32} />
            </EmailShareButton>
            <LineShareButton url={shareUrl}>
              <LineIcon round size={32} />
            </LineShareButton>
          </div>
          <Editor editorState={editorState} onEditorStateChange={setEditorState} readOnly toolbarHidden />
          <Divider className="my-4" />
          <RelatedDecksCard {...this.props} />
        </Container>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogsShowPage)
