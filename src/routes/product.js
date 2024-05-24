// Products.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InfoProduct from '../pages/Products/Info';
import Products from '../pages/Products';


const RoutesProducts = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/infoproduct" element={<InfoProduct />} />
    </Routes>
  );
};

export default RoutesProducts;
