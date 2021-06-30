import React from 'react'
import giphy from './images/XOsX.gif'
import './Loader.css'

const Loader = () => {
  return (
    <div className="fp-container">
      <img src={giphy} className="fp-loader" alt="loading" />
      
    </div>
  )
}

export default Loader
