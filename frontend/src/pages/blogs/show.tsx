import * as React from 'react'
import { EditorState } from 'draft-js'
import { AppState } from 'store'
import { connect } from 'react-redux'
import * as blogsActions from 'store/blogs/actions'
import { Editor } from 'react-draft-wysiwyg'
import { ImageCard } from 'components/blogs/Card'
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
          <Editor editorState={editorState} onEditorStateChange={setEditorState} readOnly toolbarHidden />
        </Container>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogsShowPage)
