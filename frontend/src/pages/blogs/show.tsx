import * as React from 'react'
import { EditorState } from 'draft-js'
import { AppState } from 'store'
import { connect } from 'react-redux'
import * as blogsActions from 'store/blogs/actions'
import { Editor } from 'react-draft-wysiwyg'
import { ImageCard } from 'components/blogs/Card'
import { HeadHelmet } from 'components/layouts/Helmet'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

interface PropsFromState {
  editorState: EditorState
  title: string
  description: string
  ogImage: string
  updatedAt: string
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
  updatedAt: blogs.updatedAt
})
const mapDispatchToProps = {
  setEditorState: blogsActions.setEditorState,
  fetchRequest: blogsActions.fetchRequest
}

class BlogsShowPage extends React.Component<AllProps> {
  componentDidMount() {
    this.props.fetchRequest()
  }
  public render() {
    const { editorState, title, description, updatedAt, setEditorState } = this.props
    return (
      <>
        <HeadHelmet {...this.props} />
        <Container maxWidth="md" className="my-5 blog min-vh-100">
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            {updatedAt}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {description}
          </Typography>
          <ImageCard {...this.props} />
          <Divider className="my-4" />
          <Editor editorState={editorState} onEditorStateChange={setEditorState} readOnly toolbarHidden />
        </Container>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogsShowPage)
