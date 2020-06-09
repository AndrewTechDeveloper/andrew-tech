import React from 'react'
import { Blog } from 'store/blogs/types'
import { History } from 'history'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

interface AllListProps {
  data: Blog[]
  history: History
}

export const AllList: React.FC<AllListProps> = ({ data, history }) => (
  <>
    <Typography variant="h5" component="h2">
      記事一覧
    </Typography>
    <List>
      {data.map(blog => (
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
        ))}
    </List>
  </>
)
