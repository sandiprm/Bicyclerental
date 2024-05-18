import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import BicycleListing from "../pages/BicycleListing";
import BicycleDetails from "../pages/BicycleDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/bicycle" element={<BicycleListing/>} />
      <Route path="/bicycles/:slug" element={<BicycleDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      
    </Routes>
  );
};

export default Routers;
