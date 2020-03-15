import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, Route, Switch } from 'react-router-dom';
import { AppState } from 'store';
import { Blog } from 'store/blogs/types';
import { changeEditorState } from 'store/blogs/actions';
import BlogsIndexPage from 'pages/blogs/index';

interface PropsFromState {
  editorState: number;
}

type AllProps = PropsFromState & RouteComponentProps;

const BlogsPage: React.FC<AllProps> = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.path}/`} component={BlogsIndexPage} />
    </Switch>
  );
};

const mapStateToProps = ({ blogs }: AppState) => ({
  editorState: blogs.editorState,
});

const mapDispatchToProps = {
  changeEditor: changeEditorState,
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogsPage);
