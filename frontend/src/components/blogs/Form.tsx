import * as React from 'react'
import * as blogsActions from 'store/blogs/actions'
import { Blog } from 'store/blogs/types'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

interface BlogsSelectProps {
  data: Blog[]
  id: number
  selectBlog: typeof blogsActions.selectBlog
}
interface StatusSelectProps {
  status: number
  selectStatus: typeof blogsActions.selectStatus
}
interface TitleFormProps {
  title: string
  changeTitle: typeof blogsActions.changeTitle
}
interface DescriptionFormProps {
  description: string
  changeDescription: typeof blogsActions.changeDescription
}
interface OgImageFormProps {
  ogImage: string
  changeOgImage: typeof blogsActions.changeOgImage
}

export const BlogsSelect: React.FC<BlogsSelectProps> = ({ id, data, selectBlog }) => (
  <FormControl style={{ minWidth: 120 }}>
    <InputLabel id="blog-select">Select Blog</InputLabel>
    <Select labelId="blog-select" id="blog-select" value={id || ''} onChange={selectBlog}>
      {data.map(blog => (
        <MenuItem value={blog.id} key={blog.id}>
          {blog.title}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
)
export const StatusSelect: React.FC<StatusSelectProps> = ({ status, selectStatus }) => {
  const options = [
    { name: 'editing', status: 0 },
    { name: 'publish', status: 1 },
    { name: 'hidden', status: 2 }
  ]
  return (
    <FormControl style={{ minWidth: 120 }}>
      <InputLabel id="status-select">Select Status</InputLabel>
      <Select labelId="status-select" id="status-select" value={status || ''} onChange={selectStatus}>
        {options.map(option => (
          <MenuItem value={option.status} key={option.status}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
export const TitleForm: React.FC<TitleFormProps> = ({ title, changeTitle }) => (
  <TextField id="title-form" label="title" value={title} onChange={changeTitle} />
)
export const DescriptionForm: React.FC<DescriptionFormProps> = ({ description, changeDescription }) => (
  <TextField id="description-form" label="description" value={description} onChange={changeDescription} />
)
export const OgImageForm: React.FC<OgImageFormProps> = ({ ogImage, changeOgImage }) => (
  <TextField id="og_image_form" label="og_image url" value={ogImage} onChange={changeOgImage} />
)
