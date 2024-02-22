import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap'
import ReviewSlider from '../../Components/Swiper/ReviewCarousel'
import img from '../../Global/Images/comma.png'

const WhatTravelerSay = () => {
  return (
    <>
    <div className='whattrav--container'>
     
            <div className='sections--wrapper'>
                <div className='sections--header'>
                    <h2>What Travelers Say About Us</h2>
                </div>
                
              
                    <div className='testimonialoverlay'></div>
                    <Container>
                    <div className='whattrav--content'>
                    <Row>
                        <Col md={4}>
                            <div className='testimonialbutton'>
                                <p>client Testimonial</p>
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className='testimonial--swip'>
                                <div className='comma'>
                                  <img src={img} alt='comma'/>
                                </div>
                            <ReviewSlider/>
                            </div>
                           </Col>
                    </Row>
                    </div>
                    </Container>
                </div>
          
           
    </div>
    </>
  )
}

export default WhatTravelerSay