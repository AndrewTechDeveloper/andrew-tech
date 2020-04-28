import React from 'react'
import Loader from 'react-loader-spinner'

const style = {
  spinner: {
    position: 'absolute' as 'absolute',
    top: '0',
    right: '0',
    left: '0',
    bottom: '0',
    margin: 'auto',
    width: '140px',
    height: '0px'
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
