import React from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import Layout from '../Layout'
import SidecheckBoxBar from '../Components/SideCheckBox/SidecheckBoxBar'
import DestinationPagintion from '../Components/Pagination/DestinationPagination'
import PackagePagintion from '../Components/Pagination/PackagePagination'

const Packages = () => {
  return (
    <Layout>
    <div className="packagespage--wrapper">
      <div className="destinationoverlay"></div>
      <Container>
        <div className="packagepage--content">
          <h1>Packages</h1>
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
             <PackagePagintion/>
              </Col>
            </Row>
          </Container>
    </section>
  
  </Layout>
  )
}

export default Packages