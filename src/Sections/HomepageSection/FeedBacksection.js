import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../../Global/Images/fman.png'
import FeedbackForm from '../../Components/Forms/FeedbackForm'
import '../section.css'

const FeedBacksection = () => {
  return (
    <div className='feedback--container'>
        
        <Container fluid>
        
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
        <div className='feedback--header'>
            <h2> <span>Drop</span> Your Feedback Here</h2>
        </div>
        <FeedbackForm/>
</div>
        
       
        </Col>
       </Row>
        </Container>
      
        
    </div>
  )
}

export default FeedBacksection