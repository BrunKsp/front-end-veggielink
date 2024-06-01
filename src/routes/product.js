// Products.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InfoProduct from '../pages/Products/Info';
import Products from '../pages/Products';
import TimeLineProduct from '../pages/Products/TimeLine';


const RoutesProducts = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/info-product/:id" element={<InfoProduct />} />
      <Route path="/timeline-product/:id" element={<TimeLineProduct />} />
    </Routes>
  );
};

export default RoutesProducts;
