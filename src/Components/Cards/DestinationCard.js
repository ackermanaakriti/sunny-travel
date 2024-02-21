import React from 'react'
import Cardbuttons from '../Buttons/Cardbuttons'
import img from '../../Images/dest.png'
import {faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import './Card.css'

const DestinationCard = () => {
  return (
    <>
    <div className='destinationcard--container col-md-4'>
        <div className='dest'>
            <div className='destcard--img'>
                <img src={img}/>
            </div>
            <div className='destcard--content'>
                <h4>Mount Everest Base Camp</h4>
                <div className='destcard--subcontent'>
                    <div className='destcard--review'>
                    <span>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            </span>
                    <p>(1 review)</p>
                    </div>
                    <div className='btno'>
                    <Cardbuttons value='View Details'/>
                    </div>
                  
                   
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default DestinationCard