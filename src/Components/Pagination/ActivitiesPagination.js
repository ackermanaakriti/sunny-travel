import React, { useState } from "react";
import DestinationCard from "../Cards/PackageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { region } from "../../Global/Data/Checkboxes";
import "./pagination.css";
import { Row } from "react-bootstrap";
import ActivitypageCard from "../Cards/ActivitypageCard";

const ActivitiesPagination = ({activities}) => {
  const{activity,count}= activities;
  console.log(activity)
  const cardsPerPage = 2; // Number of cards per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalCards = region.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage - 1, totalCards - 1);

  const currentCards = region.slice(startIndex, endIndex + 1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="activitiespagination--cards">
        <div className="pagination--container">
          <Row className="gy-4"> 
            {activity?.map((item) => (
             <ActivitypageCard name={item.name} id={item.id} image={item.banner_image} />
            ))}
          </Row>

          <div className="buttons--container">
            <button>
              <svg
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9755 0.340219C15.4292 0.793932 15.4292 1.52685 14.9755 1.98057L10.4732 6.50606L14.9871 11.0199C15.2046 11.2375 15.3268 11.5325 15.3268 11.8401C15.3268 12.1477 15.2046 12.4428 14.9871 12.6603C14.7696 12.8778 14.4746 13 14.1669 13C13.8593 13 13.5643 12.8778 13.3468 12.6603L8.00691 7.32042C7.89906 7.21279 7.8135 7.08495 7.75512 6.94422C7.69674 6.80348 7.66669 6.65261 7.66669 6.50025C7.66669 6.34788 7.69674 6.19701 7.75512 6.05628C7.8135 5.91554 7.89906 5.7877 8.00691 5.68007L13.3351 0.340219C13.4428 0.232371 13.5706 0.146808 13.7113 0.0884289C13.8521 0.0300495 14.0029 6.66051e-09 14.1553 0C14.3077 -6.6596e-09 14.4585 0.0300494 14.5993 0.0884289C14.74 0.146808 14.8678 0.232371 14.9755 0.340219Z"
                  fill="#030303"
                />
                <path
                  d="M7.30879 0.340219C7.7625 0.793932 7.7625 1.52685 7.30879 1.98057L2.80656 6.50606L7.32042 11.0199C7.53794 11.2375 7.66015 11.5325 7.66015 11.8401C7.66015 12.1477 7.53794 12.4428 7.32042 12.6603C7.1029 12.8778 6.80787 13 6.50025 13C6.19262 13 5.8976 12.8778 5.68007 12.6603L0.34022 7.32042C0.232372 7.21279 0.146809 7.08495 0.0884295 6.94422C0.03005 6.80348 6.66733e-09 6.65261 0 6.50025C-6.65278e-09 6.34788 0.03005 6.19701 0.0884294 6.05628C0.146809 5.91554 0.232372 5.7877 0.34022 5.68007L5.66844 0.340219C5.77607 0.232371 5.90391 0.146808 6.04464 0.0884289C6.18538 0.0300495 6.33625 6.66051e-09 6.48861 0C6.64098 -6.6596e-09 6.79185 0.0300494 6.93258 0.0884289C7.07332 0.146808 7.20116 0.232371 7.30879 0.340219Z"
                  fill="#030303"
                />
              </svg>
            </button>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <p className="pagination-active">{currentPage}</p>
            <p>{currentPage + 1}</p>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <button>
              <svg
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.02324 0.340219C0.56953 0.793932 0.56953 1.52685 1.02324 1.98057L5.52547 6.50606L1.01161 11.0199C0.794088 11.2375 0.671884 11.5325 0.671884 11.8401C0.671884 12.1477 0.794088 12.4428 1.01161 12.6603C1.22913 12.8778 1.52416 13 1.83178 13C2.13941 13 2.43443 12.8778 2.65196 12.6603L7.99181 7.32042C8.09966 7.21279 8.18522 7.08495 8.2436 6.94422C8.30198 6.80348 8.33203 6.65261 8.33203 6.50025C8.33203 6.34788 8.30198 6.19701 8.2436 6.05628C8.18522 5.91554 8.09966 5.7877 7.99181 5.68007L2.66359 0.340219C2.55597 0.232371 2.42812 0.146808 2.28739 0.0884286C2.14665 0.0300492 1.99578 -2.76966e-07 1.84342 -2.83626e-07C1.69105 -2.90286e-07 1.54018 0.0300491 1.39945 0.0884286C1.25871 0.146808 1.13087 0.232371 1.02324 0.340219Z"
                  fill="#030303"
                />
                <path
                  d="M8.69121 0.340219C8.2375 0.793932 8.2375 1.52685 8.69121 1.98057L13.1934 6.50606L8.67958 11.0199C8.46206 11.2375 8.33985 11.5325 8.33985 11.8401C8.33985 12.1477 8.46206 12.4428 8.67958 12.6603C8.8971 12.8778 9.19213 13 9.49975 13C9.80738 13 10.1024 12.8778 10.3199 12.6603L15.6598 7.32042C15.7676 7.21279 15.8532 7.08495 15.9116 6.94422C15.9699 6.80348 16 6.65261 16 6.50025C16 6.34788 15.9699 6.19701 15.9116 6.05628C15.8532 5.91554 15.7676 5.7877 15.6598 5.68007L10.3316 0.340219C10.2239 0.232371 10.0961 0.146808 9.95536 0.0884286C9.81462 0.0300492 9.66375 -2.76966e-07 9.51139 -2.83626e-07C9.35902 -2.90286e-07 9.20815 0.0300491 9.06742 0.0884286C8.92668 0.146808 8.79884 0.232371 8.69121 0.340219Z"
                  fill="#030303"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivitiesPagination;
