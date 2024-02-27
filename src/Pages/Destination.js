import React,{useEffect} from "react";
import SideCheckbLayout from "../Components/Layouts/SideCheckboxLayout";
import Layout from "../Layout";
import "./Pages.css";
import { Col, Row, Container } from "react-bootstrap";
import DestinationPagintion from "../Components/Pagination/DestinationPagination";
import SidecheckBoxBar from "../Components/SideCheckBox/SidecheckBoxBar";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { fetchDestination } from "../Redux/Store/Slices/DestinationSlice";

const Destination = () => {
  // const baseurl = 'https://jsonplaceholder.typicode.com/users';
  // const baseurl='http://192.168.1.7:8000';
  // console.log(baseurl, "helo");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${baseurl}/api/v1/packages`); 
  //       console.log(response,'from packaged redux')
  //     } catch (error) {
  //      console.log(error)
  //     }
  //   };
  //   fetchData();
  //   return () => {
  //   };
  // }, []);
  const dispatch = useDispatch();

  const { destinationdata, loading, error } = useSelector(state => state.destination);

 console.log(destinationdata,'from redux')
 useEffect(() => {
  dispatch(fetchDestination());
}, [dispatch]);

  
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
                <DestinationPagintion destinationdata={destinationdata}/>
                </Col>
              </Row>
            </Container>
      </section>
    
    </Layout>
  );
};

export default Destination;
