import React from "react";
import { Col, Row, Container } from 'react-bootstrap'
import ActiviesDetailInfo from "./ActivitiesDetail/ActiviesDetailInfo";
import SidebarForm from "../Components/SidebarForm/SidebarForm";
import Layout from "../Layout";
import SidecheckBoxBar from "../Components/SideCheckBox/SidecheckBoxBar";
import ActivitiesPagination from "../Components/Pagination/ActivitiesPagination";
const Acitivitypage = () => {
  return (
    <>
    <Layout>
    <div className="activitypage--wrapper">
        <div className="activityoverlay"></div>
        <div className="activitipage--content">
          <h1>Activities</h1>
        </div>
        <section className="section--wrapper">
          <div >
            <Container>
              <Row gx={5}>
                <Col md={3}>
                  <SidecheckBoxBar/>
                </Col>
                <Col className="side-sidecomp" md={9}>
                <ActivitiesPagination/>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    </Layout>
     
    </>
  );
};

export default Acitivitypage;
