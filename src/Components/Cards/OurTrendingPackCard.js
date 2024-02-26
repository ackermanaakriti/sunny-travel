import React from 'react';
import ele from '../../Global/Images/elephant.png';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import config from '../../config/config';
const OurTrendingPackCard = (props) => {
  console.log(props.post); // Logging props to check if they are passed correctly

  return (
    <>
      <div className='ourtrendingpaccard--container'>
        <div className='ourtrendingpaccard--subcontainer'>
          <div className='ourtrendingpaccard--img'>
            <img src={props.post.image ?? props.post.title } alt='' />
            <div className='ourtrnding--overlay'></div>
            <div className='ourtrendingpaccard--content--ii'>
              <div className='aapio'>
                <span><FontAwesomeIcon icon={faLocationDot} /></span><p>Reviews</p>
              </div>
              <div className='aapio'>
                <span><FontAwesomeIcon icon={faLocationDot} /></span><p>Views</p>
              </div>
            </div>
          </div>
          <div className='ourtrendingpaccard--content'>
            <h4>{props.post.title ?? ''}</h4>
            <div className='ourtrendingpaccard--content--ss'>
              <div className='gapio'>
                <span><FontAwesomeIcon icon={faLocationDot} /></span><p>Kilimanjaro, Tanzania</p>
              </div>
              <div className='gapio'>
                <span><FontAwesomeIcon icon={faCalendarAlt} /></span><p>{props.post.duration ?? 'N/A'} Days</p>
              </div>
            </div>
            <div className='ourtrendingpaccard--content--jj'>
              <span><FontAwesomeIcon icon={faLocationDot} /></span><p>Kilimanjaro, Tanzania</p>
            </div>
            <div className='ourtrendingpaccard--content-bb'>
              <button>Explore</button>
              <p>Price {config.price_symbol ? config.price_symbol : 'N/A'}. {props.post.price ?? 'N/A'} </p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTrendingPackCard;
