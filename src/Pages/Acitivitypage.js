import React, { useEffect } from "react";
import { Col, Row, Container } from 'react-bootstrap'
import ActiviesDetailInfo from "./ActivitiesDetail/ActiviesDetailInfo";
import SidebarForm from "../Components/SidebarForm/SidebarForm";
import Layout from "../Layout";
import SidecheckBoxBar from "../Components/SideCheckBox/SidecheckBoxBar";
import ActivitiesPagination from "../Components/Pagination/ActivitiesPagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivity } from "../Redux/Store/Slices/PackagesAcitivity";
const Acitivitypage = () => {

  const dispatch = useDispatch();
  const {activities,loading,error} = useSelector(state=>state.packageactivity)
  console.log('from the redux toolkit activity',activities);
  


  useEffect(()=>
  {
     dispatch(fetchActivity());
   
  },[dispatch])
  return (
    <>
    <Layout>
    <div className="activitypage--wrapper">
        <div className="activityoverlay"></div>
       
        <div className="activitipage--content">
          <h1>Activities</h1>
        </div>
        </div>
        <section className="section--wrapper">
         
            <Container>
              <Row gx={5}>
                <Col md={3}>
                  <SidecheckBoxBar/>
                </Col>
                <Col className="side-sidecomp" md={9}>
                <ActivitiesPagination activities={activities}/>
                </Col>
              </Row>
            </Container>
          
        </section>
     
    </Layout>
     
    </>
  );
};

export default Acitivitypage;
