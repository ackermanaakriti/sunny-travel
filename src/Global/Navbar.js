import { Col, Dropdown, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { navlinks } from '../Data/navlinks';
import logo from '../Images/logooo.png'
import Topbar from './Topbar';
import {Link} from 'react-router-dom'
import ExploreMoreBtn from '../Components/Buttons/ExploreMoreBtn';
function Navbarr() {
  const [navlinkss, setnavlinks] = useState(navlinks)
  console.log(navlinkss)
  return (
    <>
      <div className='navbar--main--wrapper'>
        <Topbar />
        <div className='navbar--container'>
          <div className='navbar--overlay'></div>
         
            <Container>
              <Row>
              <nav>
                <Col md={1}>
                  <div className='nav-logo'>
                    <img src={logo} alt='sunny-travel-logo'/>

                  </div>
                </Col>
                <Col md={9}>
                  <div className='navlinks'>
                  <ul>
                    <Link style={{textDecoration:'none',}} to='/'>  <li>Home</li></Link>
                    <Link to='/destination'>  <li>Destination</li> <span><FontAwesomeIcon icon={faChevronDown} /></span></Link>
                    <Link to='/activity'>  <li>Activities</li> <span><FontAwesomeIcon icon={faChevronDown} /></span></Link>
                    <Link to='/packages'>  <li>Packages</li> <span><FontAwesomeIcon icon={faChevronDown} /></span></Link>
                    <Link style={{textDecoration:'none',}} to='/aboutus'>  <li>About Us</li></Link>
                    <Link style={{textDecoration:'none',}} to='/activitydetail'>  <li>Contact Us</li></Link>

                  </ul>
                  </div>
                  
                </Col>
                <Col md={2}>
                  <div className='navbtn'>
                   <button>Book Now <span><FontAwesomeIcon icon={faPaperPlane} /></span>  </button>
                   
                  
                  </div>
                </Col>
                </nav>
              </Row>
            </Container>
       

        </div>
      </div>
    </>

  );
}

export default Navbarr;