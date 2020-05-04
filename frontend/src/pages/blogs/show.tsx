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
  TwitterIcon,
} from "react-share";
import { EditorState } from 'draft-js'
import { AppState } from 'store'
import { connect } from 'react-redux'
import * as blogsActions from 'store/blogs/actions'
import { Editor } from 'react-draft-wysiwyg'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar';

interface PropsFromState {
  editorState: EditorState
  title: string
  description: string
  ogImage: string
  createdAt: string
  history: History
}
interface PropsFromDispatch {
  setEditorState: typeof blogsActions.setEditorState
  fetchRequest: typeof blogsActions.fetchRequest
}
type AllProps = PropsFromState & PropsFromDispatch

const mapStateToProps = ({ blogs }: AppState) => ({
  editorState: blogs.editorState,
  title: blogs.title,
  description: blogs.description,
  ogImage: blogs.ogImage,
  createdAt: blogs.createdAt
})
const mapDispatchToProps = {
  setEditorState: blogsActions.setEditorState,
  fetchRequest: blogsActions.fetchRequest
}

class BlogsShowPage extends React.Component<AllProps> {
  componentDidMount() {
    this.props.fetchRequest()
  }
  render() {
    const style = {
      image: {
        width: '60px',
        height: '60px'
      }
    }
    const shareUrl = window.location.origin + this.props.history.location.pathname
    const { editorState, title, description, ogImage, createdAt, setEditorState } = this.props
    return (
      <>
        <Container maxWidth="md" className="my-5 blog min-vh-100">
          <div className='d-flex align-items-center'>
            <Avatar alt="og image" src={ogImage} className='mr-4' style={style.image} />
            <div>
              <Typography variant="h5">
                {title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                {createdAt}
              </Typography>
            </div>
          </div>
          <Typography variant="subtitle1" gutterBottom className='mt-4'>
            {description}
          </Typography>
          <Divider className="my-4" />
          <div className='my-2'>
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
        </Container>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogsShowPage)
