import React from 'react'
import img from '../../Images/first.png'

const MajesticCard = () => {
  return (
   <>
   <div className='majesticCard--container'>
    <div className='majesticCard--img'>
        <img src={img} alt='majestic'/>
        <div className='majestic--overlay'></div>
        <div className='majesticc--p'>
        <p className='majestic--title'>Jungle Safaris</p>
        </div>
    </div>
    <div className='majesticCard--content'>
        <p>Browse our example trips and get in contact
to start planning your very own advanture.</p>
    </div>
   </div>
   </>

  )
}

export default MajesticCard