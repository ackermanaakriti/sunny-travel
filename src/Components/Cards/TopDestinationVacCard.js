import React from 'react'
import pkhara from '../../Global/Images/pokhara.png'
import './Card.css'

const TopDestinationVacCard = () => {
  return (
    <>
    <div className='topdestivacation--container'>
        <div className='topdestivacation--img'>
            <img src={pkhara} alt='photos'/>
        </div>
        <div className='topdestivacation--content'>
            <p>Pokhara Nepal</p>
        </div>
    </div>
    </>
  )
}

export default TopDestinationVacCard