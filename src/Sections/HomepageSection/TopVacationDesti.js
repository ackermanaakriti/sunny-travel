import React from 'react'
import TopVacationSwiper from '../../Components/Swiper/TopVacationSwiper'
import { Container } from 'react-bootstrap'
import ExploreMoreBtn from '../../Components/Buttons/ExploreMoreBtn'

const TopVacationDesti = () => {
  return (
  <>
  <Container>
  <div className='topvacdesti--wrapper'>
    <div className='sections--header'>
        <h2>Top Vacation Destination</h2>
    </div>
    <div className='sections--content'>
        <TopVacationSwiper/>
    </div>
    <div className='topvacationdesti--btn'>
        <ExploreMoreBtn Value="Explore More"/>
    </div>
  </div>
  </Container>
  
  </>
  )
}

export default TopVacationDesti