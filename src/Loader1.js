import React from 'react'
import giphy from './images/infinity.gif'
import './Loader1.css'

const Loader1 = () => {
  return (
    <div className="fp-container1">
      <img src={giphy} className="fp-loader1" alt="loading" />
      
    </div>
  )
}

export default Loader1
