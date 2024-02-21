import React from 'react'
import './Sidebarform.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { featurData } from '../../Global/Data/SidebarData';



const SidebarPackages = () => {
  return (
  <>
  <div className='featuredpacakges--container'>
    <div className='featurepackage--header'>
    <button className='featurebtn'>
      Featured Packages
      
    </button>

    </div>
    <div className='featurepacakges--lists'>
       <div >
        {featurData.map((item)=>
        (
            <div className='featureslist--info'>
                  <span><FontAwesomeIcon icon={faArrowRight} /></span>
        <p>{item.name}</p>
                </div>
        ))}
      
        </div> 
    </div>
  </div>

  <div className='featuredpacakges--container'>
    <div className='featurepackage--header'>
    <button className='featurebtn'>
      Most Popular Destination
      
    </button>

    </div>
    <div className='featurepacakges--lists'>
       <div >
        {featurData.map((item)=>
        (
            <div className='featureslist--info'>
                  <span><FontAwesomeIcon icon={faArrowRight} /></span>
        <p>{item.name}</p>
                </div>
        ))}
      
        </div> 
    </div>
  </div>
  </>
  )
}

export default SidebarPackages