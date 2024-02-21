import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./Sidebarcheckbox.css";
import { region } from "../../Global/Data/Checkboxes";
import { faChevronDown ,faMagnifyingGlass,faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TitleBox from "../TitleBox";
import Cardbuttons from "../Buttons/Cardbuttons";

const SidecheckBoxBar = () => {
  const [regionVis, setRegionVis] = useState(null);
  const [activitiesVis, setactivitiesVis] = useState(null);
  const [budgetVis, setbudgetVis] = useState(null);
  return (
    <>
      
      
      <div className="searchbox--sidebar">
            <input type="text" placeholder="Search" />
            <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
          </div>
     
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
        <div className="rating--container">
          <div className="rating--info">
            <h5>Rating</h5>

            <span>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            </span>
            <button>Clear Filter</button>
            
          </div>
          <div className="days--container">
            <div className="days--info">
              <h5>Days</h5>
              <Row>
                <Col md={6}>
                  <label>Min Days</label>
                   <input/></Col>
                <Col md={6}> 
                <label>Max Days</label>
                <input/></Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="submits">
          <Cardbuttons value='Submit'/>
          <button className="cleaarbtn">Clear Filter</button>
        </div>
    
    </>
  );
};

export default SidecheckBoxBar;
