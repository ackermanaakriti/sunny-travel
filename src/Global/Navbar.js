import { Col, Dropdown, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faPaperPlane, fas } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { navlinks } from './Data/navlinks';
import logo from '../Global/Images/logooo.png'
import Topbar from './Topbar';
import {Link, Navigate, useNavigate} from 'react-router-dom'
import ExploreMoreBtn from '../Components/Buttons/ExploreMoreBtn';
function Navbarr() {
  const navigate = useNavigate();
  const [navlinkss, setnavlinks] = useState(navlinks);
  const [destListVis,setDestinationListVis]= useState(false)
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
                    <Link to='/destination'>  <li  onMouseEnter={()=>setDestinationListVis(true)}>Destination <span >
                      <FontAwesomeIcon icon={faChevronDown} /></span> </li>
                      {destListVis && (<div onMouseLeave={()=>setDestinationListVis(false)} className='category--list'>
                        <h4>Annapurna Region</h4>
                        <li>Mountain</li>
                        <li>Mountain</li>
                        <li>Mountain</li>
                        <li>Mountain</li>
                      </div>)}
                      
                      </Link>
                    <Link to='/activity'>  <li>Activities</li> <span><FontAwesomeIcon icon={faChevronDown} /></span></Link>
                    <Link to='/packages'>  <li>Packages</li> <span><FontAwesomeIcon icon={faChevronDown} /></span></Link>
                    <Link style={{textDecoration:'none',}} to='/aboutus'>  <li>About Us</li></Link>
                    <Link style={{textDecoration:'none',}} to='/activitydetail'>  <li>Contact Us</li></Link>

                  </ul>
                  </div>
                  
                </Col>
                <Col md={2}>
                  <div className='navbtn'>

                   <button><Link style={{textDecoration:'none'}} to='/booking'>Book Now <span><FontAwesomeIcon icon={faPaperPlane} /></span> </Link> </button>
                   
                  
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