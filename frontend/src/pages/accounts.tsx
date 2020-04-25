import * as React from 'react'
import { RouteComponentProps, Route, Switch } from 'react-router-dom'
import ProfilePage from 'pages/accounts/Profile'
import ContactPage from 'pages/accounts/Contact'

const BlogsPage: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <>
      <Switch>
        <Route path={`${match.path}/profile`} component={ProfilePage} />
        <Route path={`${match.path}/contact`} component={ContactPage} />
      </Switch>
    </>
  )
}

export default BlogsPage
