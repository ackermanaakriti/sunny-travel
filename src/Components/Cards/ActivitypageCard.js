import React from 'react'
import './Card.css'

import img from '../../Global/Images/activityone.png'
import { Col } from 'react-bootstrap'

const ActivitypageCard = ({name,image,id}) => {
  return (
    <Col md={4}>
   <div className='activitiescard--wrapper '>
    <div className='activitiescard--img'>
        <img src={img} alt='paragliding' />
    </div>
    <div className='activitiescard--content'>
       <h4>{name}</h4>
       <p>Pokhara</p>
    </div>
   </div>
   </Col>
  )
}

export default ActivitypageCard