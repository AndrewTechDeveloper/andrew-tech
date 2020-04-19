import * as React from 'react'
import * as blogsActions from 'store/blogs/actions'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

interface FetchButtonProps {
  id: number
  fetchRequest: typeof blogsActions.fetchRequest
}
interface SaveButtonProps {
  saveRequest: typeof blogsActions.saveRequest
}
interface UpdateButtonProps {
  updateRequest: typeof blogsActions.updateRequest
}

export const FetchButton: React.FC<FetchButtonProps> = ({ id, fetchRequest }) => (
  <Button variant="contained" color="primary" onClick={() => fetchRequest()}>
    Fetch
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
