import React, { Children } from "react";
import {
  Col,
  Container,
  Figure,
  Image,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import Layout from "../../Layout";
import DetailsSideBarLayout from "../../Components/Layouts/detailSidebarLayout";
import detailsPage from "../../Global/Data/detailsPages";
import "./detailsPage.css";
import DetailsContent from "../../Components/DetailsPage/DetailsContent/DetailsContent";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faMap,
  faRectangleList,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const DetailofTrip = () => {
  return (
    <>
      <Layout>
        <main className="details-page">
          <section className="details-banner">
            <Container>
              <h1 className="text-center">{detailsPage.name}</h1>
            </Container>
            <Figure className="banner-img">
              <Image src={detailsPage.banner} />
            </Figure>
          </section>
          <section className="details-nav">
            <Container>
              <ListGroup as="ul" horizontal>
                <ListGroupItem as="li">
                  <a href="#overview">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    Overview
                  </a>
                </ListGroupItem>
                <ListGroupItem as="li">
                  <a href="#roadmap">
                    <FontAwesomeIcon icon={faMap} />
                    Road Map
                  </a>
                </ListGroupItem>
                <ListGroupItem as="li">
                  <a href="#itinerary">
                    <FontAwesomeIcon icon={faRectangleList} />
                    Itinerary
                  </a>
                </ListGroupItem>
                <ListGroupItem as="li">
                  <a href="#essential">
                    <FontAwesomeIcon icon={faCircleCheck} />
                    Essential Info
                  </a>
                </ListGroupItem>
              </ListGroup>
            </Container>
          </section>
          <section className="details-wrapper">
            <DetailsSideBarLayout>
              <DetailsContent />
            </DetailsSideBarLayout>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default DetailofTrip;
