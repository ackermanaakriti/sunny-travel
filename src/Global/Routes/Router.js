import React from "react";
import { Routes, Route } from "react-router-dom";
import Destination from "../../Pages/Destination";
import Homepage from "../../Pages/Homepage";
import DetailofTrip from "../../Pages/detailsPages/DetailofTrip";
import Aboutus from "../../Pages/about/Aboutus";
import ServicePage from "../../Pages/services/ServicePage";
import ActivityDetail from "../../Pages/ActivitiesDetail/ActivityDetail";
import Acitivitypage from "../../Pages/Acitivitypage";
import Packages from "../../Pages/Pacakagepage";
import SinglePlace from "../../Pages/SinglePlace";
import Contactus from "../../Pages/Contactus";
import Booking from "../../Pages/Booking";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="detailoftrip" element={<DetailofTrip />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/activitydetail" element={<ActivityDetail />} />
        <Route path="/activity" element={<Acitivitypage />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/singleplace" element={<SinglePlace />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </>
  );
};

export default Routers;
