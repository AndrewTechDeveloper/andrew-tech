import React, { Suspense } from 'react'
import { RouteComponentProps, Route, Switch } from 'react-router-dom'
import Spinner from 'components/layouts/Spinner'

const ProfilePage = React.lazy(() => import('pages/accounts/Profile'))
const PrivacyPage = React.lazy(() => import('pages/accounts/Privacy'))
const ContactPage = React.lazy(() => import('pages/accounts/Contact'))

const BlogsPage: React.FC<RouteComponentProps> = ({ match }) => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      <Route path={`${match.path}/profile`} component={ProfilePage} />
      <Route path={`${match.path}/contact`} component={ContactPage} />
      <Route path={`${match.path}/privacy`} component={PrivacyPage} />
    </Switch>
  </Suspense>
)

export default BlogsPage
