import React from "react";
import SideCheckbLayout from "../Components/Layouts/SideCheckboxLayout";
import Layout from "../Layout";
import "./Pages.css";
import { Col, Container } from "react-bootstrap";
import DestinationPagintion from "../Components/Pagination/DestinationPagination";

const Destination = () => {
  const baseurl = process.env.React_base_url;
  console.log(baseurl, "helo");
  return (
    <Layout>
      <div className="destinationpage--wrapper">
        <Container>
          <div className="destinationpage--content">
            <h1>Destination</h1>
          </div>
        </Container>
      </div>
      <SideCheckbLayout>
        <Col md={9}>
          <DestinationPagintion />
        </Col>
      </SideCheckbLayout>
    </Layout>
  );
};

export default Destination;
