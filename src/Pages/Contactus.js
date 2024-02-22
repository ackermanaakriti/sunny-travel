import React from "react";
import Layout from "../Layout";
import { Container, Row, Col } from "react-bootstrap";
import SidebarForm from "../Components/SidebarForm/SidebarForm";
import { InquiryForm } from "../Components/Forms/InquiryForm";
import {fb} from '../Global/Images/facebook.png'
import fbimg from '../Global/Images/facebook.png'
import twitterr from '../Global/Images/twitter.png'
import insta from '../Global/Images/instagram.png'
import whatsapp from '../Global/Images/whatsapp.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot,faPhone,faEnvelope ,faMobile} from "@fortawesome/free-solid-svg-icons";
import './Pages.css'
import map from '../Global/Images/mapppp.png'



const Contactus = () => {
  return (
    <>
      <Layout>
        <div className="contactus-wrap">
          <div className="cotactusoverlay"></div>
          <Container>
            <div className="contactus--content">
              <h1>Contact Us</h1>
            </div>
          </Container>
          <section className="contactus--section">
            <Container>
              <Row>
                <Col md={5}>
                  <div className="contact--form">
                    <InquiryForm />
                    <div className="contact--sm">
                      <h4>We're Here</h4>
                      <p>
                        Follow Us on Social Media for the latest updates,
                        behind-the-scenes glimpses, and exclusive offers.
                      </p>
                      <div className="socialmedia-contact">
                        <img src={fbimg} alt="facebook"/>
                        <img src={twitterr} alt="twitter"/>
                        <img src={insta} alt="insta"/>
                        <img src={whatsapp} alt="whatsapp"/>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                <div className="seccol">
                <div className="contact--list">
                    <h4>Info</h4>
                    <div className="contctli"><span><FontAwesomeIcon icon={faLocationDot} /></span> 
                    <p>Kathmandu Nepal</p></div>
                    <div className="contctli"><span><FontAwesomeIcon icon={faPhone} /></span> 
                    <p>(+977) 9876542389</p></div>
                    <div className="contctli"><span><FontAwesomeIcon icon={faEnvelope} /></span> 
                    <p>xyz@gmail.com</p></div>
                    <div className="contctli"><span><FontAwesomeIcon icon={faMobile} /></span> 
                    <p>Kathmandu Nepal</p></div>
                    <div className="contctli"><span><FontAwesomeIcon icon={faPhone} /></span> 
                    <p>(+977) 9876542389</p></div>
                </div>
                <div className="mapp">
                    <img src={map} alt="googlemap"/>
                </div>
                </div>
                
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Contactus;
