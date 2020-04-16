import * as React from 'react'
import * as blogsActions from 'store/blogs/actions'
import { Blog } from 'store/blogs/types'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

interface SelectBlogProps {
  data: Blog[]
  id: number
  selectBlog: typeof blogsActions.selectBlog
}
interface TitleFormProps {
  title: string
  changeTitle: typeof blogsActions.changeTitle
}
interface ImageFormProps {
  image: string
  changeImage: typeof blogsActions.changeImage
}

export const BlogsSelect: React.FC<SelectBlogProps> = ({ id, data, selectBlog }) => (
  <FormControl style={{ minWidth: 120 }}>
    <InputLabel id="demo-simple-select-label">Select Blog</InputLabel>
    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={id} onChange={selectBlog}>
      {data.map(blog => (
        <MenuItem value={blog.id} key={blog.id}>
          {blog.title}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
)
export const TitleForm: React.FC<TitleFormProps> = ({ title, changeTitle }) => (
  <TextField id="standard-basic" label="title" value={title} onChange={changeTitle} />
)
export const ImageForm: React.FC<ImageFormProps> = ({ image, changeImage }) => (
  <TextField id="standard-basic" label="image url" value={image} onChange={changeImage} />
)
