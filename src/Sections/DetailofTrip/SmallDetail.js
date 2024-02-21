import React from "react";
import { tripSummary } from "../../Data/detailsPages";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudSunRain,
  faLocationDot,
  faMap,
  faPersonHiking,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const SmallDetail = () => {
  return (
    <>
      <div class="package-summary">
        <Row className="gy-4">
          <Col md={6} lg={4}>
            <div class="summary-box">
              <div class="summary-icon">
                <FontAwesomeIcon icon={faCalendarDays} />
              </div>
              <ListGroup as="ul" className="summary-ul">
                <ListGroupItem as="li">
                  <p>Duration</p>
                </ListGroupItem>
                <ListGroupItem as="li">
                  <h5>{tripSummary.duration}</h5>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div class="summary-box">
              <div class="summary-icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <ListGroup as="ul" className="summary-ul">
                <ListGroupItem as="li">
                  <p>Trip Starts</p>
                </ListGroupItem>
                <ListGroupItem as="li">
                  <h5>{tripSummary.trip_start}</h5>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div class="summary-box">
              <div class="summary-icon">
                <FontAwesomeIcon icon={faMap} />
              </div>
              <ListGroup as="ul" className="summary-ul">
                <ListGroupItem as="li">
                  <p>Trip Ends</p>
                </ListGroupItem>
                <ListGroupItem as="li">
                  <h5>{tripSummary.trip_end}</h5>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div class="summary-box">
              <div class="summary-icon">
                <FontAwesomeIcon icon={faUserGroup} />
              </div>
              <ListGroup as="ul" className="summary-ul">
                <ListGroupItem as="li">
                  <p>Group Size</p>
                </ListGroupItem>
                <ListGroupItem as="li">
                  <h5>{tripSummary.group_size}</h5>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div class="summary-box">
              <div class="summary-icon">
                <FontAwesomeIcon icon={faPersonHiking} />
              </div>
              <ListGroup as="ul" className="summary-ul">
                <ListGroupItem as="li">
                  <p>Activity Inclusions</p>
                </ListGroupItem>
                <ListGroupItem as="li">
                  <h5>{tripSummary.activity}</h5>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div class="summary-box">
              <div class="summary-icon">
                <FontAwesomeIcon icon={faCloudSunRain} />
              </div>
              <ListGroup as="ul" className="summary-ul">
                <ListGroupItem as="li">
                  <p>Best Season</p>
                </ListGroupItem>
                <ListGroupItem as="li">
                  <h5>{tripSummary.season}</h5>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SmallDetail;
