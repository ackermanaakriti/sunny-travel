import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import './Swiper.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight ,faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { topdesti } from "../../Global/Data/DestinationData";
import TopDestinationVacCard from "../Cards/TopDestinationVacCard";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return <div className="custom-prev-arrow" onClick={onClick}><span><FontAwesomeIcon icon={faArrowLeft} /></span></div>;
};

// Custom next arrow component
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return <div className="custom-next-arrow" onClick={onClick}><span><FontAwesomeIcon icon={faArrowRight} /></span></div>;
};

function TopVacationSwiper() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ],

    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className="slider-topvacation-container">
      <Container>
      <Slider {...settings}>
      
        {topdesti.map((item)=>
        (
          <TopDestinationVacCard />
        ))}
       
      </Slider>
      </Container>
    </div>
  );
}

export default  TopVacationSwiper;
