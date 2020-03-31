import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import BlogsPage from 'pages/blogs'

const Routes: React.FC = () => (
  <div>
    <Switch>
      <Route path="/blogs" component={BlogsPage} />
      <Route component={() => <div>Not Found</div>} />
    </Switch>
  </div>
)

export default Routes
