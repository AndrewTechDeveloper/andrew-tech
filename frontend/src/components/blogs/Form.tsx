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
  setId: typeof blogsActions.setId
}
interface StatusSelectProps {
  status: string
  setStatus: typeof blogsActions.setStatus
}
interface TitleFormProps {
  title: string
  setTitle: typeof blogsActions.setTitle
}
interface DescriptionFormProps {
  description: string
  setDescription: typeof blogsActions.setDescription
}
interface OgImageFormProps {
  ogImage: string
  setOgImage: typeof blogsActions.setOgImage
}

export const BlogsSelect: React.FC<BlogsSelectProps> = ({ id, data, setId }) => (
  <FormControl style={{ minWidth: 120 }}>
    <InputLabel id="blog-set">Select Blog</InputLabel>
    <Select labelId="blog-set" id="blog-set" value={id || ''} onChange={e => setId(e.target.value)}>
      <MenuItem value={0} key={0}>
        新しく作成
      </MenuItem>
      {data && data.map(blog => (
        <MenuItem value={blog.id} key={blog.id}>
          {blog.title}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
)
export const StatusSelect: React.FC<StatusSelectProps> = ({ status, setStatus }) => {
  const options = [{ status: 'editing' }, { status: 'publish' }, { status: 'hidden' }]
  return (
    <FormControl style={{ minWidth: 120 }}>
      <InputLabel id="status-set">Select Status</InputLabel>
      <Select labelId="status-set" id="status-set" value={status} onChange={e => setStatus(e.target.value)}>
        {options.map(option => (
          <MenuItem value={option.status} key={option.status}>
            {option.status}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
export const TitleForm: React.FC<TitleFormProps> = ({ title, setTitle }) => (
  <TextField id="title-form" label="title" value={title} onChange={e => setTitle(e.target.value)} />
)
export const DescriptionForm: React.FC<DescriptionFormProps> = ({ description, setDescription }) => (
  <TextField id="description-form" label="description" value={description} onChange={e => setDescription(e.target.value)} />
)
export const OgImageForm: React.FC<OgImageFormProps> = ({ ogImage, setOgImage }) => (
  <TextField id="og_image_form" label="og_image url" value={ogImage} onChange={e => setOgImage(e.target.value)} />
)
