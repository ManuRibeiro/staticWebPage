import React from 'react'
import forestImage from '../assets/forest-aereal.jpg'
import './banner.css';


function Banner() {
  return (
    <div className='banner'>
        <img src={forestImage} alt="forest" className='banner-image'/>
    </div>
  )
}

export default Banner