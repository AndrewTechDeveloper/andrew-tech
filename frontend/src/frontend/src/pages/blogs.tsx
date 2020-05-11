import React, { Suspense } from 'react'
import { RouteComponentProps, Route, Switch } from 'react-router-dom'
import Spinner from 'components/layouts/Spinner'

const BlogsIndexPage = React.lazy(() => import('pages/blogs/index'))
const BlogsShowPage = React.lazy(() => import('pages/blogs/show'))
const BlogsNewPage = React.lazy(() => import('pages/blogs/new'))

interface PropsFromState {
  editorState: number
  value: string
}

type AllProps = PropsFromState & RouteComponentProps

const BlogsPage: React.FC<AllProps> = ({ match }) => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      <Route exact path={`${match.path}`} component={BlogsIndexPage} />
      <Route path={`${match.path}/new`} component={BlogsNewPage} />
      <Route path={`${match.path}/:id`} component={BlogsShowPage} />
      <Route path={'/'} component={BlogsIndexPage} />
    </Switch>
  </Suspense>
)

export default BlogsPage
