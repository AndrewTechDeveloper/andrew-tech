import * as React from 'react'
import { EditorState } from 'draft-js'
import { AppState } from 'store'
import { connect } from 'react-redux'
import * as blogsActions from 'store/blogs/actions'
import {
  Typography,
  Container,
  Grid,
} from '@material-ui/core'
import { CarouselTitle } from 'components/blogs/Carousel'
import { TrendList } from 'components/blogs/List'
import { Timeline } from 'react-twitter-widgets'

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
        <Container maxWidth="md" className="my-5">
          <Grid container direction='row' justify='space-between'>
            <Grid item xs={12} sm={8} className='mb-2'>
              <Typography variant="h4">人気の記事</Typography>
              <TrendList />
            </Grid>
            <Grid item xs={12} sm={3} className='mb-2'>
              <Timeline
                dataSource={{ sourceType: 'profile', screenName: 'andrewdayoooo' }}
                options={{ username: 'andrewdayoooo', height: '400', theme: 'dark' }}
              />
            </Grid>
          </Grid>
        </Container>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogsIndexPage)
