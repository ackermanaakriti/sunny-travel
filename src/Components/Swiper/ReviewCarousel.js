import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import "./Swiper.css";
import img from "../../Global/Images/paragliding.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { topdesti } from "../../Global/Data/DestinationData";
import TestimonialCard from "../Cards/TestimonialCard";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="review-prev-arrow" onClick={onClick}>
      <span>
        <FontAwesomeIcon icon={faChevronLeft} />
      </span>
    </div>
  );
};

// Custom next arrow component
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="review-next-arrow" onClick={onClick}>
      <span>
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </div>
  );
};

function ReviewSlider() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,

    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className="slider-review-container">
      <Slider {...settings}>
        {topdesti.map((item) => (
          <TestimonialCard />
        ))}
      </Slider>
    </div>
  );
}

export default ReviewSlider;
