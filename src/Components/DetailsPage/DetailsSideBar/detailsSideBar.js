import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { InquiryForm } from "../../../Forms/InquiryForm";
const detailsSideBar = () => {
  return (
    <>
      <div className="details-sidebar">
        <div className="side-booking">
          <div className="btn-wrapper">
            <Link to="#!" class="stylist-btn">
              Book Now
              <FontAwesomeIcon icon={faPaperPlane} />
            </Link>
          </div>
          <InquiryForm />
        </div>
      </div>
    </>
  );
};

export default detailsSideBar;
