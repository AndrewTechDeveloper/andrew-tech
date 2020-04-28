import React, { Suspense } from 'react'
import { RouteComponentProps, Route, Switch } from 'react-router-dom'
import Spinner from 'components/layouts/Spinner'

const ProfilePage = React.lazy(() => import('pages/accounts/Profile'))

const BlogsPage: React.FC<RouteComponentProps> = ({ match }) => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      <Route path={`${match.path}/profile`} component={ProfilePage} />
    </Switch>
  </Suspense>
)

export default BlogsPage
