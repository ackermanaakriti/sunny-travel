import React from 'react'
import Layout from '../../Layout'
import './Activitydetail.css'
import { Col, Row, Container } from 'react-bootstrap'
import SideCheckbLayout from '../../Components/Layouts/SideCheckboxLayout'
import DestinationPagintion from '../../Components/Pagination/DestinationPagination'
import SidebarForm from '../../Components/SidebarForm/SidebarForm'
import ActiviesDetailInfo from './ActiviesDetailInfo'


const ActivityDetail = () => {
    return (
        <>
            <Layout>
                <div className='activitydetail--wrapper'>
                    <div className='activitydetail--overlay'></div>
                    <div className='activitydetail--content'>
                        <h1>Paragliding in Pokhara</h1>
                    </div>
                    <section>
                        <div className='activitydetail--'>
                        <Container>
                            <Row gx={5}>
                                    <Col  md={3}>
                                        <SidebarForm />
                                    </Col>
                                    <Col className='side-sidecomp' md={9}>
                                     <ActiviesDetailInfo/>
                                    </Col>

                            </Row>
                        </Container>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}

export default ActivityDetail