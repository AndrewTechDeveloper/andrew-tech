import * as React from 'react'
import { RouteComponentProps, Route, Switch } from 'react-router-dom'
import BlogsIndexPage from 'pages/blogs/index'
import BlogsNewPage from 'pages/blogs/new'
import BlogsShowPage from 'pages/blogs/show'
import BlogsEditPage from 'pages/blogs/edit'
import 'draft-js-image-plugin/lib/plugin.css'
import 'draft-js/dist/Draft.css'
import 'scss/blogs.scss'

interface PropsFromState {
  editorState: number
  value: string
}

type AllProps = PropsFromState & RouteComponentProps

const BlogsPage: React.FC<AllProps> = ({ match }) => {
  return (
    <>
      <Switch>
        <Route exact path={`${match.path}`} component={BlogsIndexPage} />
        <Route path={`${match.path}/new`} component={BlogsNewPage} />
        <Route path={`${match.path}/edit/:id`} component={BlogsEditPage} />
        <Route path={`${match.path}/:id`} component={BlogsShowPage} />
      </Switch>
    </>
  )
}

export default BlogsPage
