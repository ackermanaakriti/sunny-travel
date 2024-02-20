import React from 'react'
import img from '../../Images/pokhara.png'
import './Card.css'
import ExploreMoreBtn from '../Buttons/ExploreMoreBtn'
import Cardbuttons from '../Buttons/Cardbuttons'


const DestinationCard = ({props}) => {
  return (
    <>
    <div className='destinationcard--container col-md-4'>
      <div className='dest-wrap'>
     <div className='destinationcard--img'>
        <img src={img} alt=''/>
     </div>
      <div class="reviewcount">
        <div class="starCount">
          <div className='starDisplay'>
            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6707 14.4109L10.1589 14.106L9.64713 14.4109L5.4099 16.9351L6.52255 12.1987L6.6617 11.6064L6.19962 11.2105L2.49127 8.03391L7.39675 7.6164L7.99385 7.56558L8.2306 7.01507L10.1589 2.53119L12.0872 7.01507L12.324 7.56558L12.9211 7.6164L17.8235 8.03365L14.1088 11.21L13.6452 11.6064L13.7855 12.2L14.9041 16.9328L10.6707 14.4109Z" fill="#E8AB12" stroke="#E8AB12" stroke-width="2"/>
            </svg>
            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6707 14.4109L10.1589 14.106L9.64713 14.4109L5.4099 16.9351L6.52255 12.1987L6.6617 11.6064L6.19962 11.2105L2.49127 8.03391L7.39675 7.6164L7.99385 7.56558L8.2306 7.01507L10.1589 2.53119L12.0872 7.01507L12.324 7.56558L12.9211 7.6164L17.8235 8.03365L14.1088 11.21L13.6452 11.6064L13.7855 12.2L14.9041 16.9328L10.6707 14.4109Z" fill="#E8AB12" stroke="#E8AB12" stroke-width="2"/>
            </svg>
            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6707 14.4109L10.1589 14.106L9.64713 14.4109L5.4099 16.9351L6.52255 12.1987L6.6617 11.6064L6.19962 11.2105L2.49127 8.03391L7.39675 7.6164L7.99385 7.56558L8.2306 7.01507L10.1589 2.53119L12.0872 7.01507L12.324 7.56558L12.9211 7.6164L17.8235 8.03365L14.1088 11.21L13.6452 11.6064L13.7855 12.2L14.9041 16.9328L10.6707 14.4109Z" fill="#E8AB12" stroke="#E8AB12" stroke-width="2"/>
            </svg>
            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6707 14.4109L10.1589 14.106L9.64713 14.4109L5.4099 16.9351L6.52255 12.1987L6.6617 11.6064L6.19962 11.2105L2.49127 8.03391L7.39675 7.6164L7.99385 7.56558L8.2306 7.01507L10.1589 2.53119L12.0872 7.01507L12.324 7.56558L12.9211 7.6164L17.8235 8.03365L14.1088 11.21L13.6452 11.6064L13.7855 12.2L14.9041 16.9328L10.6707 14.4109Z" fill="#E8AB12" stroke="#E8AB12" stroke-width="2"/>
            </svg>
          </div>
          <div className='starCoundown'>
            (1 Review)
          </div>
        </div>
      </div>
     <div className='sticker'>Trending</div>
     <div className='destinationcard--content'>
        <h4>Mountain Base Camp</h4>
        <div className='destinationcard--subcontent'>
          <div>
         
        <p><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.15748 11H14.2233V16H9.15748V11ZM16.2496 2H15.2364V0H13.2101V2H5.10485V0H3.07854V2H2.06538C0.950905 2 0.0390625 2.9 0.0390625 4V18C0.0390625 19.1 0.950905 20 2.06538 20H16.2496C17.3641 20 18.2759 19.1 18.2759 18V4C18.2759 2.9 17.3641 2 16.2496 2ZM16.2496 4V6H2.06538V4H16.2496ZM2.06538 18V8H16.2496V18H2.06538Z" fill="#0E6097"/>
</svg>20 Days 19 nights</p>
<p><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.146 12.375C11.7618 12.375 12.3524 12.1335 12.7878 11.7037C13.2232 11.274 13.4679 10.6911 13.4679 10.0833C13.4679 9.4755 13.2232 8.89261 12.7878 8.46284C12.3524 8.03307 11.7618 7.79163 11.146 7.79163C10.5303 7.79163 9.93969 8.03307 9.50426 8.46284C9.06884 8.89261 8.82422 9.4755 8.82422 10.0833C8.82422 10.6911 9.06884 11.274 9.50426 11.7037C9.93969 12.1335 10.5303 12.375 11.146 12.375Z" fill="#0E6097"/>
<path d="M17.7125 3.14331H17.7135C21.3401 6.72289 21.3401 12.5272 17.7135 16.1068L12.6955 21.0596C12.2846 21.4648 11.7274 21.6925 11.1464 21.6925C10.5655 21.6925 10.0083 21.4648 9.5973 21.0596L4.60539 16.1325L4.57939 16.1068C0.952704 12.5272 0.952704 6.72289 4.57939 3.14331C8.20514 -0.436278 14.0858 -0.436278 17.7125 3.14331ZM5.56384 4.11497C4.08362 5.57616 3.25206 7.55876 3.25206 9.62506C3.25206 11.6914 4.08362 13.673 5.56384 15.1342L5.5852 15.1562L5.58706 15.1581L10.5818 20.0879C10.7313 20.2353 10.9341 20.3181 11.1455 20.3181C11.3569 20.3181 11.5597 20.2353 11.7092 20.0879L16.7272 15.1342C18.1899 13.6695 19.0066 11.6933 18.9991 9.63664C18.9916 7.57998 18.1606 5.60965 16.6872 4.15531C15.2139 2.70096 13.2177 1.88056 11.1339 1.873C9.05022 1.86544 7.04799 2.67135 5.56384 4.11497Z" fill="#0E6097"/>
</svg>Kilimanjaro, Tanzania</p>
<p><svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12H0L7.25 2.33L9.25 5L13 0L22 12ZM10.5 6.67L13 10H18L13 3.33L10.5 6.67ZM4 10H10.5L7.25 5.67L4 10Z" fill="#0E6097"/>
</svg>Trekking
</p>
          </div>
     <div className='cardFooter'>
      <div class="buttonWrapper">
      <Cardbuttons value='Explore'/>

      </div>
      <p className='pricetag--c'> Rs.2,234</p>
      </div> 
       
        </div>
      
     </div>
    </div>
    </div>
    </>
  )
}

export default DestinationCard