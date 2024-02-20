import { Col, Dropdown, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { navlinks } from '../Data/navlinks';
import logo from '../Images/logooo.png'
import Topbar from './Topbar';
import {Link} from 'react-router-dom'
function Navbarr() {
  const [navlinkss, setnavlinks] = useState(navlinks)
  console.log(navlinkss)
  return (
    <>
      <div className='navbar--main--wrapper'>
        <Topbar />
        <Navbar collapseOnSelect expand="lg" className="navbar--wrapper">
          <Container>



            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Row className='navbar--row'>
                <Col xs={2}>
                  <Navbar.Brand href="#home">
                    <img src={logo} alt='logo' />
                  </Navbar.Brand></Col>

                <Col xs={8}>
                  <Nav className="me-auto navlinks--wrapper">
                    <div className='navlink--lists'>
                      <Link to='/'>
                      < p>{navlinks[0].name}</p>
                      </Link>
                    </div>
                    <Dropdown>
                    <Link path='/destination'>
               <Dropdown.Toggle variant="success" id="dropdown-basic">
                
                  {navlinks[1].name} <span><FontAwesomeIcon icon={faChevronDown} /></span>
                 
                  </Dropdown.Toggle>
                  </Link>
                       <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                         </Dropdown.Menu>
                       </Dropdown>
                       <Dropdown>
               <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {navlinks[2].name} <span><FontAwesomeIcon icon={faChevronDown} /></span>
                  </Dropdown.Toggle>
                       <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                         </Dropdown.Menu>
                       </Dropdown>
                       <Dropdown>
               <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {navlinks[3].name} <span><FontAwesomeIcon icon={faChevronDown} /></span>
                  </Dropdown.Toggle>
                       <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                         </Dropdown.Menu>
                       </Dropdown>
                   
                 
                    <div className='navlink--lists'>
                      <p>{navlinks[4].name}</p>
                    </div>
                    <div className='navlink--lists'>
                      <p>{navlinks[5].name}</p>
                    </div>



                  </Nav>
                </Col>
                <Col className='lastsection' xs={2}>
                  <Nav className='colll'>
                    <button>hello</button>
                  </Nav></Col>
              </Row>
            </Navbar.Collapse>


          </Container>
        </Navbar>
      </div>
    </>

  );
}

export default Navbarr;