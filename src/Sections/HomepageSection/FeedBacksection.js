import React from 'react'
import { Col, Row } from 'react-bootstrap'
import img from '../../Global/Images/fman.png'
import FeedbackForm from '../../Components/Forms/FeedbackForm'
import '../section.css'

const FeedBacksection = () => {
  return (
    <div className='feedback--container'>
       <Row className='gx-0'>
        <Col md={6}> 
        <div className='feedback--col'>
        <div className='feedback--img'>
            <img src={img}/>
        </div>
        </div>
        
        </Col >
       
        <Col md={6}> 
        <div className='feedback--form'>
        <FeedbackForm/>
</div>
        
       
        </Col>
       </Row>
        
    </div>
  )
}

export default FeedBacksection