import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Topbar = () => {
  return (
    <div className="topbar--wrapper">
      <div className="hottopbar--wrapper">
        <Container>
          <div>
            <p>
              20% off on The trips to Annapurna from Mustang Route.{" "}
              <span>Enquire Now !!!</span>
            </p>
          </div>
        </Container>
      </div>

      <Container>
        <div className="topbar--container">
          <div className="topbar--contactinfo--container d-flex">
            <div className="firstcontact--info d-flex ">
              <span className="topbar--icons">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <p>rae@xyzgmail.com</p>
            </div>

            <div className="firstcontact--info d-flex">
              <span className="topbar--icons">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <p>+9875432578</p>
            </div>
          </div>

          <div className="topbar--socialinfo--container">
            <span className="topbar--icons">
              <FontAwesomeIcon icon={faFacebookF} />
            </span>
            <span className="topbar--icons">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span className="topbar--icons">
              <FontAwesomeIcon icon={faTwitter} />
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Topbar;
