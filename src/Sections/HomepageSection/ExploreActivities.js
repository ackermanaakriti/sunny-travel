import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import map from '../../Images/mapimage.png'
import heli from '../../Images/heli.png'
import mountain from '../../Images/mountain.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons'


const ExploreActivities = () => {
  return (
  <>
  <Container>
  <div className='sections--wrapper'>
    <div className='sections--header'> 
    <h2>Explore Activities in Map</h2>
    </div>
    <div className='exploreacti--content'>
        <Row>
            <Col xs={7}>
            <div className='exploreacti-mapimage'>
                <img src={map} alt='nepal-map'/>
            </div>
            </Col>
            <Col xs={5}>
            <div className='exploreacti--lists'>
             <div className='exploreacti--list--header'>
                <p>
                    Base Camp Trek
                </p>
             </div>
             <div className='exploreacti--li-list'>
                <li><span><FontAwesomeIcon icon={faPersonWalking} /></span>Kanchanjunga Base Camp</li>
                <li><span><FontAwesomeIcon icon={faPersonWalking} /></span>Kanchanjunga Base Camp</li>

                <li><span><FontAwesomeIcon icon={faPersonWalking} /></span>Kanchanjunga Base Camp</li>

                <li><span><FontAwesomeIcon icon={faPersonWalking} /></span>Kanchanjunga Base Camp</li>


             </div>
            </div>
            </Col>
        </Row>
        <Row>
            <Col>
            <div className='smallactiviti--container'>
                <div className='smallactiviti--img'>
                    <img src={heli} alt=''/>
                </div>
                <p className='smallactiviti--content'>Heli Tour</p>
            </div>
            </Col>
            <Col>
            <div className='smallactiviti--container'>
                <div className='smallactiviti--img'>
                    <img src={heli} alt=''/>
                </div>
                <p className='smallactiviti--content'>Heli Tour</p>
            </div>
            </Col>
            <Col>
            <div className='smallactiviti--container'>
                <div className='smallactiviti--img'>
                    <img src={heli} alt=''/>
                </div>
                <p className='smallactiviti--content'>Heli Tour</p>
            </div>
            </Col>
            <Col>
            <div className='smallactiviti--container'>
                <div className='smallactiviti--img'>
                    <img src={mountain} alt=''/>
                </div>
                <p className='smallactiviti--content'>Mountaineering</p>
            </div>
            </Col>
            <Col>
            <div className='smallactiviti--container'>
                <div className='smallactiviti--img'>
                    <img src={heli} alt=''/>
                </div>
                <p className='smallactiviti--content'>Heli Tour</p>
            </div>
            </Col>
            <Col>
            <div className='smallactiviti--container'>
                <div className='smallactiviti--img'>
                    <img src={heli} alt=''/>
                </div>
                <p className='smallactiviti--content'>Heli Tour</p>
            </div>
            </Col>
            <Col>
            <div className='smallactiviti--container'>
                <div className='smallactiviti--img'>
                    <img src={heli} alt=''/>
                </div>
                <p className='smallactiviti--content'>Heli Tour</p>
            </div>
            </Col>
        </Row>
    </div>

     </div>
     </Container>
  </>
  )
}

export default ExploreActivities