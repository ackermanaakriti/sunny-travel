import React from 'react'
import ele from '../../Images/elephant.png'
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
const OurTrendingPackCard = () => {
  return (
    <>
    <div className='ourtrendingpaccard--container'>
        <div className='ourtrendingpaccard--subcontainer'>
        <div className='ourtrendingpaccard--img'>
           
            <img src={ele} alt=''/>
            <div className='ourtrnding--overlay'></div>
           
            <div className='ourtrendingpaccard--content--ii'>
             <div className='aapio' ><span><FontAwesomeIcon icon={faLocationDot} /></span><p>Reviews</p></div>
             <div className='aapio'  ><span><FontAwesomeIcon icon={faLocationDot} /></span><p>views</p></div>
           
          
            </div>
        </div>
        <div className='ourtrendingpaccard--content'>
            <h4>Climibing Mount Annapurna Trek</h4>
            <div className='ourtrendingpaccard--content--ss'>
             <div  className='gapio' ><span><FontAwesomeIcon icon={faLocationDot} /></span><p>Kilimanjaro, Tanzania</p></div>
             <div  className='gapio' ><span><FontAwesomeIcon icon={faLocationDot} /></span><p>7 Days</p></div>
           
            </div>
            <div className='ourtrendingpaccard--content--jj'>  <span><FontAwesomeIcon icon={faLocationDot} /></span><p>Kilimanjaro, Tanzania</p></div>
            <div className='ourtrendingpaccard--content-bb'>
                <button>Explore</button>
                <p> Price Rs.2,299</p>
            </div>


        </div>
        </div>
    </div>
    </>
  )
}

export default OurTrendingPackCard