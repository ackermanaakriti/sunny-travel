import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbarr() {
  return (
    <Navbar  collapseOnSelect expand="lg" className="navbar--wrapper">
      <Container>
        
       
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Row className='navbar--row'>
            <Col xs={2}>
            <Navbar.Brand href="#home">
            <img src='' alt='logo'/>
        </Navbar.Brand></Col>

        <Col xs={7}>
          <Nav className="me-auto">
           
            <NavDropdown title="Destination" id="collapsible-nav-dropdown">
                <span></span>
              <NavDropdown.Item href="#action/3.1">Pokhara</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Chitawan
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mustang</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Col>
          <Col xs={3}>
          <Nav>
            <button>hello</button>
          </Nav></Col>
          </Row>
        </Navbar.Collapse>
       
       
      </Container>
    </Navbar>
  );
}

export default Navbarr;