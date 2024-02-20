import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MajesticCard from '../../Components/Cards/MajesticCard'
import ExploreMoreBtn from '../../Components/Buttons/ExploreMoreBtn'

const Majesticpeaks = () => {
  return (
    <Container>
    <div className='majesticpeaks--container'>
     <div className='sections--wrapper'>
        <div className=' majestic--sections--header'>
            <p>Categories You would Love to Explore</p>
            <h2>Majestic Peaks , <br></br> Safaris & More <br></br>  Categories</h2>
        </div>
        <div className='majestic--content--container'>
       <MajesticCard/>
       <MajesticCard/>
       <MajesticCard/>
        </div>
      
        

       
     </div>
     <div className='topvacationdesti--btn'>
        <ExploreMoreBtn Value="Explore More"/>
    </div>
    </div>
    </Container>
  )
}

export default Majesticpeaks