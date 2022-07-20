import React from 'react'
import ProgressBar from './ProgressBar'
import "../styles/PleaseWaitBox.css"

const PleaseWaitBox = ({text}) => {
    
  return <>
    <div className="pleasewaitbox">
      <h2 className="pleasewaitbox-heading">{text}</h2>
      <ProgressBar/>
    </div>
  </>
}

export default PleaseWaitBox