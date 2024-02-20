import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import "./Sidebarcheckbox.css";
import { region } from "../../Data/Checkboxes";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidecheckBoxBar = () => {
  const [regionVis, setRegionVis] = useState(null);
  return (
    <>
      <Col md={3}>
        <div className="sidecheckboxbar--container">
          <form>
            <div className="form--dropdown--Region">
              <div className="form--headers--region">
                <h5 onClick={() => setRegionVis(!regionVis)}>
                  Region <FontAwesomeIcon icon={faChevronDown} />
                </h5>
              </div>
              {regionVis && (
                <div className="form--checkboxes--list">
                  {region.map((item, index) => (
                    <div class="form-check" key={index}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id={item.name}
                      />
                      <label className="form-check-label" for={item.name}>
                        {item.name}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="form--dropdown--Region">
              <div className="form--headers--activities">
                <h5>Activities</h5>
              </div>
              <div className="form--checkboxes--list">
                {region.map((item) => (
                  <div className="form--checkbox">
                    <input type="checkbox" />
                    <label>{item.name}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="form--dropdown--Region">
              <div className="form--headers--budget">
                <h5>Budget</h5>
              </div>
              <div className="form--checkboxes--list">
                {region.map((item) => (
                  <div className="form--checkbox">
                    <input type="checkbox" />
                    <label>{item.name}</label>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </Col>
    </>
  );
};

export default SidecheckBoxBar;
