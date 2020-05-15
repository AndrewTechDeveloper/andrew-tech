import * as React from 'react'
import { History } from 'history'
import { EditorState } from 'draft-js'
import { AppState } from 'store'
import { connect } from 'react-redux'
import * as blogsActions from 'store/blogs/actions'
import { Blog } from 'store/blogs/types'
import { CarouselTitle } from 'components/blogs/Carousel'
import { AllList } from 'components/blogs/List'
import { TrendDecksCard, RecentDecksCard } from 'components/blogs/Card'
import { Timeline } from 'react-twitter-widgets'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

interface PropsFromState {
  editorState: EditorState
  data: Blog[]
  history: History
}
interface PropsFromDispatch {
  setEditorState: typeof blogsActions.setEditorState
  setStatus: typeof blogsActions.setStatus
  fetchAllRequest: typeof blogsActions.fetchAllRequest
}
type AllProps = PropsFromState & PropsFromDispatch

const mapStateToProps = ({ blogs }: AppState) => ({
  editorState: blogs.editorState,
  data: blogs.data
})
const mapDispatchToProps = {
  setEditorState: blogsActions.setEditorState,
  setStatus: blogsActions.setStatus,
  fetchAllRequest: blogsActions.fetchAllRequest
}

class BlogsIndexPage extends React.Component<AllProps> {
  componentDidMount() {
    this.props.setStatus('publish')
    this.props.fetchAllRequest()
  }
  render() {
    return (
      <>
        <CarouselTitle {...this.props} />
        <Container maxWidth="lg" className="my-5">
          <Grid container direction="row" justify="space-between">
            <Grid item xs={12} sm={8} className="mb-2">
              <div className="mb-5">
                <TrendDecksCard {...this.props} />
              </div>
              <div className="mb-5">
                <RecentDecksCard {...this.props} />
              </div>
              <div className="mb-5">
                <AllList {...this.props} />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} className="mb-2">
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
