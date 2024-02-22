import React from 'react'
import { Container, Row } from 'react-bootstrap'
import logo from '../Global/Images/sunnylogo.png'
const Footer = () => {
  return (
    <>
    <div className='footer--container'>
        <Container>
            <Row>
                <Col md={2}>
                    <div className='footer-logo'>
                        <img src={logo} alt='logo'/>
                    </div>
                </Col>
                <Col md={7}>
                    <div className='footer--links'>
                        <ul>
                           <Link to='/destination'><li>Destination</li></Link>
                           <Link to='/activity'><li>Activities</li></Link>
                           <Link to='/packages'><li>Packages</li></Link>
                           <Link to='/about'><li>About Us</li></Link>
                        </ul>
                    </div>
                </Col>
                <Col md={3}>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Footer