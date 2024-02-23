import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faLocationDot, faPersonWalkingWithCane } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
const SearchDestinationssection = () => {
  return (
    <div className='searchdesti--container'>
       
          <Container>
          <div className='searchdesti--wrapper'>
            <form>
            <Row>
              <Col>
              <div className='searchdest'>
                <span><FontAwesomeIcon icon={faLocationDot} /></span>
                <select>
                  <option>Destination</option>
                  <option>Mustang</option>
                  <option>Chitawan</option>
                </select>
              </div>
              </Col>
              <Col>
              <div className='searchdest'>
                <span><FontAwesomeIcon icon={faCloudSun} /></span>
                <select>
                  <option>Seasons</option>
                  <option>Mustang</option>
                  <option>Chitawan</option>
                </select>
              </div>
              </Col>
              <Col>
              <div className='searchdest'>
                <span><FontAwesomeIcon icon={faPersonWalkingWithCane} /></span>
                <select>
                  <option>Activities</option>
                  <option>Mustang</option>
                  <option>Chitawan</option>
                </select>
              </div>
              </Col>
              <Col>
              <div className='searchdest'>
                <span><FontAwesomeIcon icon={faCalendar} /></span>
                <select>
                  <option>Duration</option>
                  <option>Mustang</option>
                  <option>Chitawan</option>
                </select>
              </div>

            
              </Col>
              <Col>
             
               <button className='searchdest-btn'>Search Result</button>
              
              </Col>
            </Row>
            </form>
            </div>
          </Container>
            
        </div>

  )
}

export default SearchDestinationssection