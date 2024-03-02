import React from 'react'
import "./Offers.css"
import exclucive_image from"../Assets/exclusive_image.png"
function Offers() {
  return (
    <div className='offers'>
        <div className='offer-left'>
            <h1>Exclusive</h1>
            <h2>Offers for You </h2>
            <p> ONLY ON BEST SELLERS PRODUCTS </p>
            <button>Check Now </button>
        </div>
        <div className='offer-right'>
          <img src={exclucive_image} alt=""/>
        </div>
        </div>
  )
}

export default Offers