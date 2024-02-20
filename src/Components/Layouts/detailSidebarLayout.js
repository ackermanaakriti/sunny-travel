import React from "react";
import "../../App.css";

import { DetailsPageSideBarLayoutProvider } from "../../Context/detailsPageSideBar";
import DetailsSideBar from "../DetailsPage/DetailsSideBar/detailsSideBar";
import { Col, Container, Row } from "react-bootstrap";
const detailsSideBarLayout = ({ children }) => {
  return (
    <>
      <DetailsPageSideBarLayoutProvider>
        <Container>
          <Row>
            <Col md={3}>
              <DetailsSideBar />
            </Col>
            <Col md={9}>{children}</Col>
          </Row>
        </Container>
      </DetailsPageSideBarLayoutProvider>
    </>
  );
};

export default detailsSideBarLayout;
