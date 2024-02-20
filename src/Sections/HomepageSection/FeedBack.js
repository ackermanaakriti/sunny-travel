import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FeedbackForm from '../../Forms/FeedbackForm'
import man from '../../Images/bannerform.png'

const FeedBack = () => {
  return (
   <div className='feedback--container'>
    <div className='sections--wrapper'>
   
        <Row>
            <Col xs={6}>
            <div className='feedback--image'>
                <img src={man} alt='a man '/>
            </div>
            </Col>
            <Col xs={6}>
            <div className='formfeedback--container'>
                <h2>
                    Drop your Feedback here
                </h2>
            <FeedbackForm/>
            </div>
           
            </Col>

        </Row>

    </div>
   
   </div>
  )
}

export default FeedBack