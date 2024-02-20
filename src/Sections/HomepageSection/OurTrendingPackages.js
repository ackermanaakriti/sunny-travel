import React from 'react'
import OurTrendingPackCard from '../../Components/Cards/OurTrendingPackCard'
import { Container } from 'react-bootstrap'
import { ourtrendigpac } from '../../Data/Card'
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
         {
            ourtrendigpac.map((item)=>
            (
             <OurTrendingPackCard/>
            )
           )
         }
          
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