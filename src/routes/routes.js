import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Users/Login";
import SigIn from "../pages/Users/SigIn";
import Home from "../pages";

const Routess = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/sigin/" element={<SigIn />} />
      </Routes>
    </Router>
  );
};
export default Routess;
