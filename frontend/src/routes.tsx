import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom'
import Spinner from 'components/layouts/Spinner'

const BlogsPage = React.lazy(() => import('pages/blogs'));
const AccountsPage = React.lazy(() => import('pages/accounts'));

const Routes: React.FC = () => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      <Route path="/blogs" component={BlogsPage} />
      <Route path="/accounts" component={AccountsPage} />
      <Route component={() => <div>Not Found</div>} />
    </Switch>
  </Suspense>
)

export default Routes
