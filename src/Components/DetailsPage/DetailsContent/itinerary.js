import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Image,
} from "react-bootstrap";
import {
  essentialDetails,
  itineraryDetails,
} from "../../../Global/Data/detailsPages";

const Itinerary = () => {
  return (
    <>
      <div className="info-wrapper itinerary-wrapper">
        <h3 id="itinerary">Itinerary</h3>
        <Accordion>
          {itineraryDetails.map((item, index) => (
            <AccordionItem key={index} eventKey={index} flush>
              <AccordionHeader>
                <Image src={item.icon} />
                {item.head}
              </AccordionHeader>
              <AccordionBody>{item.para}</AccordionBody>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="info-wrapper essential-wrapper">
        <h3 id="essential">Essential Info</h3>
        <span class="heading-span">Equipment & Gear</span>
        <div className="essential-ul">
          <ul>
            {essentialDetails.map((item, index) => (
              <li key={index}>
                <Image src={item.icon} />
                <p>{item.para}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Itinerary;
