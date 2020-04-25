import * as React from 'react'
import * as blogsActions from 'store/blogs/actions'
import { Blog } from 'store/blogs/types'
import {
  InputLabel,
  FormControl,
  TextField,
  Select,
  MenuItem
} from '@material-ui/core'

interface BlogsSelectProps {
  data: Blog[]
  id: number
  selectBlog: typeof blogsActions.selectBlog
}
interface StatusSelectProps {
  status: string
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
      <MenuItem value={0} key={0}>
        新しく作成
      </MenuItem>
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
    { status: 'editing' },
    { status: 'publish' },
    { status: 'hidden' }
  ]
  return (
    <FormControl style={{ minWidth: 120 }}>
      <InputLabel id="status-select">Select Status</InputLabel>
      <Select labelId="status-select" id="status-select" value={status} onChange={selectStatus}>
        {options.map(option => (
          <MenuItem value={option.status} key={option.status}>
            {option.status}
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
