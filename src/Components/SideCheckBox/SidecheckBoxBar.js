import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import "./Sidebarcheckbox.css";
import { region } from "../../Data/Checkboxes";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TitleBox from "../TitleBox";

const SidecheckBoxBar = () => {
  const [regionVis, setRegionVis] = useState(null);
  const [activitiesVis, setactivitiesVis] = useState(null);
  const [budgetVis, setbudgetVis] = useState(null);
  return (
    <>
      <Col md={3}>
        <div className="sidecheckboxbar--container">
         
          <form>
            <div className="form--dropdown--Region">
              <div onClick={() => setRegionVis(!regionVis)} className="form--headers--region">
                <h5 >
                  Region
                </h5>
                <span><FontAwesomeIcon icon={faChevronDown} /></span>
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

            <div className="form--dropdown--activities">
              <div onClick={() => setactivitiesVis(!activitiesVis)} className="form--headers--activities">
              <h5 >
                  Activities 
                </h5>
                <span><FontAwesomeIcon icon={faChevronDown} /></span>
              </div>
              {activitiesVis && (
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

            <div className="form--dropdown--budget">
              <div onClick={() => setbudgetVis(!budgetVis)} className="form--headers--budget">
              <h5 >
                  Budget 
                </h5>
                <span><FontAwesomeIcon icon={faChevronDown} /></span>
              </div>
              {budgetVis && (
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
          </form>
        </div>
      </Col>
    </>
  );
};

export default SidecheckBoxBar;
