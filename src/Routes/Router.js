import React from "react";
import { Routes, Route } from "react-router-dom";
import Destination from "../Pages/Destination";
import Homepage from "../Pages/Homepage";
import DetailofTrip from "../Pages/detailsPages/DetailofTrip";
import Aboutus from "../Pages/about/Aboutus";
import ServicePage from "../Pages/services/ServicePage";
import ActivityDetail from "../Pages/ActivitiesDetail/ActivityDetail";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="detailoftrip" element={<DetailofTrip />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/activitydetail" element={<ActivityDetail/>} />


      </Routes>
    </>
  );
};

export default Routers;
