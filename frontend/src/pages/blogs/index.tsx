import * as React from 'react'
import { EditorState } from 'draft-js'
import { AppState } from 'store'
import { connect } from 'react-redux'
import * as blogsActions from 'store/blogs/actions'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { CarouselTitle } from 'components/blogs/Carousel'
import { TrendList } from 'components/blogs/List'

interface PropsFromState {
  editorState: EditorState
}
interface PropsFromDispatch {
  changeEditorState: typeof blogsActions.changeEditorState
}
type AllProps = PropsFromState & PropsFromDispatch

const mapStateToProps = ({ blogs }: AppState) => ({
  editorState: blogs.editorState
})
const mapDispatchToProps = {
  changeEditorState: blogsActions.changeEditorState
}

class BlogsIndexPage extends React.Component<AllProps> {
  public render() {
    return (
      <>
        <CarouselTitle />
        <Container maxWidth="md" className="mt-4">
          <Typography variant="h4">人気の記事</Typography>
          <TrendList />
        </Container>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogsIndexPage)
