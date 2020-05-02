import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import loadable from "@loadable/component";
import Spinner from 'components/layouts/Spinner'

const BlogsPage = React.lazy(() => import('pages/blogs'))
const AccountsPage = React.lazy(() => import('pages/accounts'))

const Routes: React.FC = () => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      <Route path="/blogs" component={BlogsPage} />
      <Route path="/accounts" component={AccountsPage} />
      <Route component={BlogsPage} />
    </Switch>
  </Suspense>
)

export default Routes
