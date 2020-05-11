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
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'

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
  setEditorState: typeof blogsActions.setEditorState
  setTitle: typeof blogsActions.setTitle
  setDescription: typeof blogsActions.setDescription
  setOgImage: typeof blogsActions.setOgImage
  setId: typeof blogsActions.setId
  setStatus: typeof blogsActions.setStatus
  fetchRequest: typeof blogsActions.fetchRequest
  fetchAllRequest: typeof blogsActions.fetchAllRequest
  saveRequest: typeof blogsActions.saveRequest
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
  setEditorState: blogsActions.setEditorState,
  setTitle: blogsActions.setTitle,
  setDescription: blogsActions.setDescription,
  setOgImage: blogsActions.setOgImage,
  setId: blogsActions.setId,
  setStatus: blogsActions.setStatus,
  fetchRequest: blogsActions.fetchRequest,
  fetchAllRequest: blogsActions.fetchAllRequest,
  saveRequest: blogsActions.saveRequest
}

class BlogsNewPage extends React.Component<AllProps> {
  componentDidMount() {
    this.props.setStatus('all')
    this.props.fetchAllRequest()
  }
  render() {
    const { id, title, description, status, editorState, updatedAt, setEditorState } = this.props
    return (
      <>
        <Toast {...this.props} />
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
          <Card className="p-2">
            <Grid container spacing={3}>
              <Grid item xs className="align-items-center d-flex">
                <div className="p-2 m-0">
                  <Typography variant="subtitle1" gutterBottom>
                    ID: {id || '未選択'}
                  </Typography>
                </div>
                <BlogsSelect {...this.props} />
                <FetchButton {...this.props} />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs>
                <TitleForm {...this.props} />
              </Grid>
              <Grid item xs>
                <DescriptionForm {...this.props} />
              </Grid>
              <Grid item xs>
                <OgImageForm {...this.props} />
              </Grid>
              <Grid item xs>
                <StatusSelect {...this.props} />
              </Grid>
              <Grid item xs>
                <SaveButton {...this.props} />
              </Grid>
            </Grid>
          </Card>
          <Editor editorState={editorState} onEditorStateChange={setEditorState} />
        </Container>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogsNewPage)
