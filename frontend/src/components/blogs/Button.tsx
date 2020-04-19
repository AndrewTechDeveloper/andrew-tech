import * as React from 'react'
import * as blogsActions from 'store/blogs/actions'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

interface JumpButtonProps {
  id: number
}
interface SaveButtonProps {
  saveRequest: typeof blogsActions.saveRequest
}
interface UpdateButtonProps {
  updateRequest: typeof blogsActions.updateRequest
}

export const JumpToEditButton: React.FC<JumpButtonProps> = ({ id }) => (
  <Button variant="contained" color="primary">
    <Link to={`/blogs/edit/${id}`} style={{ color: '#fff' }}>
      Jump to edit
    </Link>
  </Button>
)

export const UpdateButton: React.FC<UpdateButtonProps> = ({ updateRequest }) => (
  <Button variant="contained" color="secondary" onClick={() => updateRequest()}>
    Update
  </Button>
)

export const SaveButton: React.FC<SaveButtonProps> = ({ saveRequest }) => (
  <Button variant="contained" color="secondary" onClick={() => saveRequest()}>
    Save
  </Button>
)
