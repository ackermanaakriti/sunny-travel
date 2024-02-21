import React from 'react'
import './Pages.css'
import { Col, Row, Container } from 'react-bootstrap'
import Layout from '../Layout'
import SidecheckBoxBar from "../Components/SideCheckBox/SidecheckBoxBar";
import ActivitiesPagination from "../Components/Pagination/ActivitiesPagination";
import SidebarForm from '../Components/SidebarForm/SidebarForm';


const SinglePlace = () => {
  return (
    <Layout>
    <div className='singleplace--wrapper'>
          <div className="singleplaceoverlay"></div>
        <div className='singleplace--content'>
        <h1>Pokhara</h1>
        </div>
        <section className='section--wrapper'>
        <Container>
              <Row gx={5}>
                <Col md={3}>
                  <SidebarForm/>
                </Col>
                <Col className="side-sidecomp" md={9}>
                <ActivitiesPagination/>
                </Col>
              </Row>
            </Container>
        </section>
    </div>
    </Layout>
  )
}

export default SinglePlace