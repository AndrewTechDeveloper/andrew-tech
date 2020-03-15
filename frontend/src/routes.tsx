import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import IndexPage from 'pages/blogs/index'

const Routes: React.SFC = () => (
  <div>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route component={() => <div>Not Found</div>} />
    </Switch>
  </div>
)

export default Routes
