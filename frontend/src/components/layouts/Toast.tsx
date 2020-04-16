import React from 'react'
import * as blogsActions from 'store/blogs/actions'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

interface AlertProps {
  toast: { message: string; severity: 'success' | 'info' | 'warning' | 'error' | undefined; isOpen: boolean }
  deleteToast: typeof blogsActions.deleteToast
}
const Toast: React.FC<AlertProps> = ({ toast, deleteToast }) => (
  <Snackbar open={toast.isOpen} autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} onClose={deleteToast}>
    <Alert severity={toast.severity} onClose={deleteToast}>
      {toast.message}
    </Alert>
  </Snackbar>
)

export default Toast
