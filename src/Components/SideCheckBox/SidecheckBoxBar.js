import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./Sidebarcheckbox.css";
import { activities, budget, region } from "../../Global/Data/Checkboxes";
import {
  faChevronDown,
  faMagnifyingGlass,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TitleBox from "../TitleBox";
import Cardbuttons from "../Buttons/Cardbuttons";
import { useDispatch } from "react-redux";
import { addFilterActivity, addFilterBudget, addFilterRegion, fetchfilteredActivities, fetchfilteredBudget, fetchfilteredRegion } from "../../Redux/Store/Slices/FilterSlice";

const SidecheckBoxBar = () => {
  const dispatch = useDispatch();
  // state to toggle the visibility of list
  const [regionVis, setRegionVis] = useState(null);
  const [activitiesVis, setactivitiesVis] = useState(null);
  const [budgetVis, setbudgetVis] = useState(null);
// state to store the input after checked
  const [selectedRegion, setSelectedRegion] = useState([]); 
  const [selectedActivities, setSelectedActivities] = useState([]); 
  const [selectedBudget, setSelectedBudget] = useState([]);
// state for select all operation of 
  const [selectAll, setSelectAllRegion] = useState(null);
  const [selectAllActivities, setSelectAllActivities] = useState(null);
  const [selectAllBudget, setSelectAllBudget] = useState(null);

// handling region 
  const handleRegionChange = (event) => {
    const itemName = event.target.value;
    const isChecked = event.target.checked;
    if (itemName === "All") {
      setSelectAllRegion(isChecked);
      if (isChecked) {
        setSelectedRegion(region.map((item) => item.name));
       
       
      } else {
        setSelectedRegion([]);
      }
    } else {
      if (isChecked) {
        setSelectedRegion([...selectedRegion, itemName]);
      } else {
        setSelectedRegion(selectedRegion.filter((item) => item !== itemName));
      }
    }
  };
 

// handling Acitivities
  const handleActivitiesChange  = (event) => {
    const itemName = event.target.value;
    const isChecked = event.target.checked;
    if (itemName === "All") {
      setSelectAllActivities(isChecked);
      if (isChecked) {
        setSelectedActivities(activities.map((item) => item.name));

      } else {
        setSelectedActivities([]);
      }
    } else {
      if (isChecked) {
        setSelectedActivities([...selectedActivities, itemName]);
      } else {
        setSelectedActivities(selectedActivities.filter((item) => item !== itemName));
      }
    }
  };
  // handling budget
  const handleBudgetChange =(event)=>
  {
    const itemName = event.target.value;
    const isChecked= event.target.checked;

   
      if(isChecked)
      {
        setSelectedBudget([...selectedBudget,itemName])
     
      }
      else{
        setSelectedBudget([])
      } 
  }
  const hanldeClear=()=>
  {
    setSelectedActivities([])

    setSelectedBudget([])
    setSelectedRegion([])
  }
  
  useEffect(()=>
  {
    dispatch(fetchfilteredRegion(selectedRegion))
    dispatch(fetchfilteredActivities(selectedActivities))
    dispatch(fetchfilteredBudget(selectedBudget))
  },[selectedRegion,selectedActivities,selectedBudget])

  //  console.log('selected region are' ,selectedRegion,selectedBudget,selectedActivities)
   
  return (
    <>
      <div className="searchbox--sidebar">
        <input type="text" placeholder="Search" />
        <span>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </div>

      <div className="sidecheckboxbar--container">
        <form>
          {/* <div className="form--dropdown--Region">
            <div onClick={() => setRegionVis(!regionVis)} className="form--headers--region">
              <h5 >
                Region
              </h5>
              <span><FontAwesomeIcon icon={faChevronDown} /></span>
            </div>
            {regionVis && (
              <div className="form--checkboxes--list">
                <div class="form-check" >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="All"
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                  />

                  <label className="form-check-label" >
                    Alll
                  </label>
                </div>
                {region.map((item, index) => (
                  <div class="form-check" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={item.name}
                      id={item.name}
                      // checked={selectedRegion?.includes(item?.name)}
                      onChange={handleRegionChange}
                    />
                    <label className="form-check-label" for={item.name}>
                      {item.name}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div> */}
          <div className="form--dropdown--Region">
            <div
              onClick={() => setRegionVis(!regionVis)}
              className="form--headers--region"
            >
              <h5>Region</h5>
              <span>
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </div>
            {regionVis && (
              <div className="form--checkboxes--list">
                {region.map((item, index) => (
                  <div className="form-check" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={item.name}
                      checked={selectedRegion.includes(item.name)}
                      onChange={handleRegionChange}
                      id={item.name}
                    />
                    <label className="form-check-label" htmlFor={item.name}>
                      {item.name}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="form--dropdown--activities">
            <div
              onClick={() => setactivitiesVis(!activitiesVis)}
              className="form--headers--activities"
            >
              <h5>Activities</h5>
              <span>
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </div>
            {activitiesVis && (
              <div className="form--checkboxes--list">
                {activities.map((item, index) => (
                  <div class="form-check" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                     
                      id={item.name}
                      value={item.name}
                      checked={selectedActivities.includes(item.name)}
                      onChange={handleActivitiesChange}
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
            <div
              onClick={() => setbudgetVis(!budgetVis)}
              className="form--headers--budget"
            >
              <h5>Budget</h5>
              <span>
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </div>
            {budgetVis && (
              <div className="form--checkboxes--list">
                {budget.map((item, index) => (
                  <div class="form-check" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={item.name}
                      value={item.name}
                      checked={selectedBudget.includes(item.name)}
                      onChange={handleBudgetChange}

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
                <input />
              </Col>
              <Col md={6}>
                <label>Max Days</label>
                <input />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="submits">
        <Cardbuttons value="Submit" />
        <button onClick={hanldeClear} className="cleaarbtn">Clear Filter</button>
      </div>
    </>
  );
};

export default SidecheckBoxBar;
