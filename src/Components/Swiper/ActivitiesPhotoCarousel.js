import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import './Swiper.css'
import img from '../../Global/Images/paragliding.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight ,faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { topdesti } from "../../Global/Data/DestinationData";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return <div className="custom-prev-arrow" onClick={onClick}><span><FontAwesomeIcon icon={faArrowLeft} /></span></div>;
};

// Custom next arrow component
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return <div className="custom-next-arrow" onClick={onClick}><span><FontAwesomeIcon icon={faArrowRight} /></span></div>;
};

function ActivitiesPhotoSwiper() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className="slider-topvacation-container">
      
      <Slider {...settings}>
      
        {topdesti.map((item)=>
        (
            <div className="swiperactiimg">
                <img src={img }  alt="paragliding"/>
            </div>
          
        ))}
       
      </Slider>
    
    </div>
  );
}

export default  ActivitiesPhotoSwiper;
