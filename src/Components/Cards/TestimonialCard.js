import React from 'react'
import img from '../../Global/Images/client.png'

const TestimonialCard = () => {
  return (
   <>
   <div className='Testimonialcard--wrap'>
    <div className='testcard--info'>
        <div className='client-img'>
            <img src={img} alt='client--image' />
        </div>
        <div className='client--info'>
            <h4>Esther Hill</h4>
            <p>lead Entrant Technician</p>
        </div>
    </div>
    <div className='testcard-content'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
   </div>
   </>
  )
}

export default TestimonialCard