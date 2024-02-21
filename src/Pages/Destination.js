import React from "react";
import SideCheckbLayout from "../Components/Layouts/SideCheckboxLayout";
import Layout from "../Layout";
import "./Pages.css";
import { Col, Row, Container } from "react-bootstrap";
import DestinationPagintion from "../Components/Pagination/DestinationPagination";
import SidecheckBoxBar from "../Components/SideCheckBox/SidecheckBoxBar";

const Destination = () => {
  const baseurl = process.env.React_base_url;
  console.log(baseurl, "helo");
  return (
    <Layout>
      <div className="destinationpage--wrapper">
        <div className="destinationoverlay"></div>
        <Container>
          <div className="destinationpage--content">
            <h1>Destination</h1>
          </div>
        </Container>
      </div>
      <section className="section--wrapper">
      <Container>
              <Row gx={5}>
                <Col md={3}>
                 <SidecheckBoxBar/>
                </Col>
                <Col className="side-sidecomp" md={9}>
                <DestinationPagintion/>
                </Col>
              </Row>
            </Container>
      </section>
    
    </Layout>
  );
};

export default Destination;
