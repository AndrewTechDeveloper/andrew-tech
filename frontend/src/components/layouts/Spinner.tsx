import React from 'react'
import Loader from 'react-loader-spinner'

const style = {
  spinner: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}
const Spinner: React.FC = () => (
  <div className="vh-100 vw-100">
    <div style={style.spinner}>
      <Loader type="Audio" color="#202020" height={80} width={80} />
    </div>
  </div>
)

export default Spinner
