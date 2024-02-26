import React from 'react'
import OurTrendingPackCard from '../../Components/Cards/OurTrendingPackCard'
import { Col, Container, Row } from 'react-bootstrap'
import { ourtrendigpac } from '../../Global/Data/Card'
import ExploreMoreBtn from '../../Components/Buttons/ExploreMoreBtn'

const OurTrendingPackages = () => {
  return (
  <>
  <div className='outrendingpack--container'>

    
    <Container>
    <div className='sections--wrapper'>
        <div className='sections--header'>
        <h2>Our Trending Packages</h2>
        </div>

        <div className='ourtrendingpac--contents'>
          <Row className='gy-4'>
          {
            ourtrendigpac.map((item)=>
            (
              <Col md={4}> <OurTrendingPackCard/></Col>
            
            )
           )
         }
          </Row>
         
          
        </div>
        <div className='topvacationdesti--btn'>
        <ExploreMoreBtn Value="Explore More"/>
    </div>
    </div>
    </Container>
   
  </div>
  </>
  )
}

export default OurTrendingPackages