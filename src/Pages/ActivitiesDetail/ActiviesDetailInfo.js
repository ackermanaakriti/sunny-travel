import React from 'react'
import './Activitydetail.css'
import ActivitiesPhotoSwiper from '../../Components/Swiper/ActivitiesPhotoCarousel'

const ActiviesDetailInfo = () => {
  return (
  <>
  <div className='activitiesdetailinfo--container'>
    
    <div className='activitidetailinfo--descrip'>
        <h3>
            Overview
        </h3>
        <p>
        Embark on an exhilarating adventure amidst the 
        stunning landscapes of Pokhara with our paragliding experiences. Soar high above the picturesque valleys and pristine lakes, framed by the majestic Annapurna mountain range. Whether you're a seasoned paragliding enthusiast or a first-time flyer, our expert pilots ensure a safe and unforgettable journey through Nepal's skies. Discover the thrill of flight and the beauty of Pokhara from a unique perspective with our tailored paragliding tours.
 
        </p>
    </div>
    <div className='--imgswiper'>
         <ActivitiesPhotoSwiper/>
    </div>
    <div className='activitidetailinfo--descrip--'>
        <h3>
        What makes Pokhara an ideal destination for paragliding?
        </h3>
        <p>
        Pokhara boasts stunning landscapes with the majestic Annapurna mountain range as a backdrop. Its stable thermals and reliable weather conditions make it one of the best places in the world for paragliding.
 
        </p>
    </div>
    <div className='activitidetailinfo--descrip--'>
        <h3>
        What makes Pokhara an ideal destination for paragliding?
        </h3>
        <p>
        Pokhara boasts stunning landscapes with the majestic Annapurna mountain range as a backdrop. Its stable thermals and reliable weather conditions make it one of the best places in the world for paragliding.
 
        </p>
    </div>
  </div>
  </>
  )
}

export default ActiviesDetailInfo