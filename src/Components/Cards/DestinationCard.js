import React from 'react'
import Cardbuttons from '../Buttons/Cardbuttons'
import img from '../../Global/Images/dest.png'
import {faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import './Card.css'

const DestinationCard = ({name,image}) => {
    console.log(name,'from card redux')
  return (
    <>
    <div className='destinationcard--container col-md-4'>
        <div className='dest'>
            <div className='destcard--img'>
                <img src={image}/>
            </div>
            <div className='destcard--content'>
                <h4>{name}</h4>
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