import React from "react";
import SmallDetail from "../../../Sections/DetailofTrip/SmallDetail";
import { Figure, Image } from "react-bootstrap";
import Itinerary from "./itinerary";

const DetailsContent = () => {
  return (
    <div className="details-content">
      <SmallDetail />
      <div class="details-info package-info">
        <div class="info-wrapper">
          <h3>Overview</h3>
          <p>
            Embark on an exhilarating adventure amidst the stunning landscapes
            of Pokhara with our paragliding experiences. Soar high above the
            picturesque valleys and pristine lakes, framed by the majestic
            Annapurna mountain range. Whether you're a seasoned paragliding
            enthusiast or a first-time flyer, our expert pilots ensure a safe
            and unforgettable journey through Nepal's skies. Discover the thrill
            of flight and the beauty of Pokhara from a unique perspective with
            our tailored paragliding tours.
          </p>
        </div>
        <div class="info-wrapper map-wrapper">
          <h3 id="roadmap">Road Map</h3>
          <Figure>
            <Image src="./images/roadmap.jpg" alt="" />
          </Figure>
        </div>
        <Itinerary />
      </div>
    </div>
  );
};

export default DetailsContent;
