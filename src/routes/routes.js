import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Users/Login";

const Routess = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login/" element={<Login />} />
      </Routes>
    </Router>
  );
};
export default Routess;
