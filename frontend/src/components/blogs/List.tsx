import React from 'react'
import { Blog } from 'store/blogs/types'
import { History } from 'history';
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from '@material-ui/core'

interface TrendListProps {
  data: Blog[]
  history: History
}
interface RecentListProps {
  data: Blog[]
  history: History
}

export const TrendList: React.FC<TrendListProps> = ({ data, history }) => (
  <>
    <Typography variant="h4">人気の記事</Typography>
    <List>
      {data.map(blog =>
        <div key={blog.id}>
          <ListItem alignItems="flex-start" button onClick={() => history.push(`blogs/${blog.id}`)}>
            <ListItemAvatar>
              <Avatar src={blog.og_image} />
            </ListItemAvatar>
            <ListItemText
              primary={blog.title}
              secondary={
                <Typography component="span" variant="caption" color="textSecondary">
                  {blog.updated_at}
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      )}
    </List>
  </>
)

export const RecentList: React.FC<RecentListProps> = ({ data, history }) => (
  <>
    <Typography variant="h4">最新の記事</Typography>
    <List>
      {data.map(blog =>
        <div key={blog.id}>
          <ListItem alignItems="flex-start" button onClick={() => history.push(`blogs/${blog.id}`)}>
            <ListItemAvatar>
              <Avatar src={blog.og_image} />
            </ListItemAvatar>
            <ListItemText
              primary={blog.title}
              secondary={
                <Typography component="span" variant="caption" color="textSecondary">
                  {blog.updated_at}
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      )}
    </List>
  </>
)

