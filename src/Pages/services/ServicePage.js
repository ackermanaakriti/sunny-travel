import React from "react";
import Layout from "../../Layout";
import "./../about/style.css";
import { Col, Container, Figure, FigureImage, Row } from "react-bootstrap";
import { servicesDetails } from "../about/data/About";
const ServicePage = () => {
  return (
    <Layout>
      <section className="services-page section-break">
      <div className="services--wrapper">
          <div className="servicesoverlay">
            
          </div>
          <div className="services--content">
            <h1>Our Services</h1>
          </div>
        </div>
        <Container>
          <div className="services-info">
            <p className="services-summary">
              At Sunny Travels, we're dedicated to curating unique and
              exhilarating activities that showcase the beauty and diversity of
              Nepal. Our expertly crafted itineraries combine outdoor
              exploration with authentic cultural immersion, ensuring that every
              moment of your journey is filled with wonder and discovery.
            </p>
            <div className="services-wrapper">
              <Row className="g-4">
                {servicesDetails.map((item, index) => (
                  <Col md={4} key={index}>
                    <div className="services-box">
                      <Figure>
                        <FigureImage src={item.img ? item.img : null} />
                      </Figure>
                      <article>
                        <h4>{item.name ? item.name : null}</h4>
                        <p>{item.info ? item.info : null}</p>
                      </article>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default ServicePage;
