import React, { useState } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import logo from '../Global/Images/sunnylogo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
const Footer = () => {
    const [email,setSubcribeEmail] = useState('')
    const baseUrl = 'http://192.168.1.7:8000'


    const handlefooterForm= async(e)=>
    { 
        e.preventDefault();
        console.log('hello from footer')
        try 
        {
            const res =  await axios.post(`${baseUrl}/api/v1/news-letter`,{email})
           console.log(res,'footer')
        }
        catch(err)
        {
            console.log("error while submiting form",err);
        }
       
      

    }
  return (
    <>
    <div className='footer--container'>
        <div className='footer--overlay'></div>
        <Container>
            <div className='footer---'>
            <Row>
                <Col md={2}>
                    <div className='footer-logo'>
                      logo
                    </div>
                </Col>
                <Col md={7}>
                    <div className='footer--links'>
                        <ul className='footer-li'>
                           <Link  to='/destination'><li>Destination</li></Link>
                           <Link to='/activity'><li>Activities</li></Link>
                           <Link to='/packages'><li>Packages</li></Link>
                           <Link to='/about'><li>About Us</li></Link>
                        </ul>
                        <div className='footer-contact'>
                          <Row>
                            <Col md={6}><div className='cntact--div'><span><FontAwesomeIcon icon={faLocationDot} /></span> <p>Kathmandu, Nepal</p></div> </Col>
                            <Col md={6}> <div className='cntact--div'> <span><FontAwesomeIcon icon={faPhone} /></span>  <p>(+977) 9851176788   </p></div> </Col>
                            <Col> <div className='cntact--div'> <span><FontAwesomeIcon icon={faEnvelope} /></span>  <p>info@sunnytreks.com</p></div> </Col>
                          </Row>
                        </div>
                        <div className='footer--sm'>
                            <span><FontAwesomeIcon icon={faFacebook} /></span>
                            <span><FontAwesomeIcon icon={faTwitter} /></span>
                            <span><FontAwesomeIcon icon={faInstagram} /></span>
                            <span><FontAwesomeIcon icon={faWhatsapp} /></span>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='footer--form'>
                    <h4>Subcribe to our Newsletter</h4>
                    <form onSubmit={handlefooterForm}>
                        <div className='input--'>  <input onChange={(e)=>setSubcribeEmail(e.target.value)}  name='email' value={email} type='email' placeholder='Enter your email address'/>
                        <span><FontAwesomeIcon icon={faEnvelope} /></span></div>
                       
                        <button type='submit'> Submit</button>
                    </form>
                    <div className='inquirydiv'>
                        Make an inquiry
                    </div>
                    </div>
                    
                </Col>
            </Row>
            </div>
          
        </Container>
    </div>
    </>
  )
}

export default Footer