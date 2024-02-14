import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  Button,
  Col,
  Container,
  Figure,
  FigureCaption,
  FigureImage,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck, fas } from "@fortawesome/free-solid-svg-icons";
import { aboutServices, aboutTeams, aboutTravel } from "./data/About";

const Aboutus = () => {
  // const [aboutServicessss, setAboutServices] = useState(aboutServices);
  // console.log(aboutServices);
  var slickSettings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <img className="slick-prev" src="./images/svg/arrow.svg" alt="Previous" />
    ),
    nextArrow: (
      <img className="slick-next" src="./images/svg/arrow.svg" alt="Next" />
    ),
  };
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetchTeams();
    const intervalId = setInterval(fetchTeams, 60000); // Fetch every 60 seconds

    return () => clearInterval(intervalId);
  }, []);
  const fetchTeams = async () => {
    try {
      const res = await fetch("http://192.168.1.11:8000/api/v1/teams");
      const jsonData = await res.json();
      console.log(jsonData.teams);
      setTeams(jsonData.teams);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <section className="about-page">
        <div className="about-bar">
          <Container>
            <ListGroup as="ul" horizontal>
              <ListGroupItem as="li">
                <FontAwesomeIcon icon={fas.faStar} />
                4.5 Rated
              </ListGroupItem>
              <ListGroupItem as="li">
                <FontAwesomeIcon icon={faCircleCheck} />
                24/7 Support
              </ListGroupItem>
              <ListGroupItem as="li">
                <FontAwesomeIcon icon={faCircleCheck} />
                Local Expertise
              </ListGroupItem>
              <ListGroupItem as="li">
                <FontAwesomeIcon icon={faCircleCheck} />
                Responsive Customer Support
              </ListGroupItem>
            </ListGroup>
          </Container>
        </div>
        <div className="about-info">
          <Container>
            <Row>
              <Col md={4}>
                <Figure>
                  <FigureImage src="images/camping.jfif" />
                </Figure>
              </Col>
              <Col md={8}>
                <div className="heading-wrapper">
                  <h2 className="heading">
                    Welcome to <span>Sunny Holidays Nepal</span>
                  </h2>
                </div>
                <article>
                  <p>
                    Trek through the Himalayas to the legendary Mount Everest
                    Base Camp, where you'll follow in the footsteps of
                    mountaineers amidst breathtaking scenery. Begin your journey
                    in Kathmandu before flying to Lukla to start the trek. Pass
                    through Sherpa villages and rhododendron forests,
                    acclimatizing as you ascend. Reach iconic landmarks like
                    Namche Bazaar and Tengboche Monastery before arriving at
                    Everest Base Camp, a pinnacle of achievement. Stand in awe
                    of Everest's towering summit and hike to Kala Patthar for
                    sunrise views. This transformative adventure offers
                    unforgettable memories and a newfound appreciation for the
                    majestic Himalayas.
                  </p>
                </article>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="about-services ">
          <Container>
            <div className="heading-wrapper">
              <h4 className="heading">Our Services</h4>
            </div>
            <Row className="gy-4">
              {aboutServices.map((service, index) => (
                <Col md={4} key={index}>
                  <div className="services-box">
                    <Figure>
                      {service.icon ? (
                        <FigureImage src={service.icon} alt={service.name} />
                      ) : null}
                    </Figure>
                    {service.name ? <p>{service.name}</p> : null}
                  </div>
                </Col>
              ))}
            </Row>
            <div className="btn-wrapper">
              <Button as="a" href="#!" className="btn-blue">
                View More
              </Button>
            </div>
          </Container>
        </div>
        <div className="about-teams">
          <Container>
            <div className="heading-wrapper">
              <h4 className="heading">Meet Our Teams</h4>
            </div>
            <Slider {...slickSettings}>
              {teams.map((item, index) => (
                <div key={index}>
                  <div className="teams-box">
                    <Figure>
                      {item.image ? (
                        <FigureImage
                          src={`http://192.168.1.11:8000/uploads/team/${item.image}`}
                        />
                      ) : null}
                    </Figure>
                    <article>
                      {item.name ? <h5>{item.name}</h5> : null}
                      {item.position ? <p>{item.position}</p> : null}
                    </article>
                  </div>
                </div>
              ))}
            </Slider>
          </Container>
        </div>
        <div className="about-travel">
          <Container>
            <div className="heading-wrapper">
              <h4 className="heading">Travel Diaries</h4>
            </div>
            <div className="travel-wrapper">
              <Row className="gy-3">
                {aboutTravel
                  .filter((item, index) => index < 3)
                  .map((item, index) => (
                    <Col md={4} key={index}>
                      <div className="travel-box">
                        <Figure>
                          {item.img ? <FigureImage src={item.img} /> : null}
                          {item.name ? (
                            <FigureCaption>{item.name}</FigureCaption>
                          ) : null}
                        </Figure>
                      </div>
                    </Col>
                  ))}
                {aboutTravel
                  .filter((item, index) => index > 2)
                  .map((item, index) => (
                    <Col md={6} key={index}>
                      <div className="travel-box">
                        <Figure>
                          {item.img ? <FigureImage src={item.img} /> : null}
                          {item.name ? (
                            <FigureCaption>{item.name}</FigureCaption>
                          ) : null}
                        </Figure>
                      </div>
                    </Col>
                  ))}
              </Row>
            </div>
          </Container>
        </div>
      </section>
    </Layout>
  );
};

export default Aboutus;
