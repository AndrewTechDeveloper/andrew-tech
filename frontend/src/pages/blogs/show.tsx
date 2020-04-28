import * as React from 'react'
import { EditorState } from 'draft-js'
import { AppState } from 'store'
import { connect } from 'react-redux'
import * as blogsActions from 'store/blogs/actions'
import { Editor } from 'react-draft-wysiwyg'
import { Container, Typography, Divider, Grid } from '@material-ui/core'
import { ImageCard } from 'components/blogs/Card'
import { Timeline } from 'react-twitter-widgets'
import { HeadHelmet } from 'components/layouts/Helmet'

interface PropsFromState {
  editorState: EditorState
  title: string
  description: string
  ogImage: string
  updatedAt: string
}
interface PropsFromDispatch {
  changeEditorState: typeof blogsActions.changeEditorState
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
  changeEditorState: blogsActions.changeEditorState,
  fetchRequest: blogsActions.fetchRequest
}

class BlogsShowPage extends React.Component<AllProps> {
  componentDidMount() {
    this.props.fetchRequest()
  }
  public render() {
    const { editorState, title, description, ogImage, updatedAt, changeEditorState } = this.props
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
          <Editor editorState={editorState} onEditorStateChange={changeEditorState} readOnly toolbarHidden />
        </Container>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogsShowPage)
