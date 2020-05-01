import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import { Alert } from '@material-ui/lab'

interface AlertProps {
  toast: {
    message?: string;
    severity?: 'success' | 'info' | 'warning' | 'error' | undefined;
    isOpen?: boolean
  }
}
const Toast: React.FC<AlertProps> = ({ toast }) => (
  <Snackbar open={toast.isOpen} autoHideDuration={1000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} >
    <Alert severity={toast.severity} >
      {toast.message}
    </Alert>
  </Snackbar>
)

export default Toast
