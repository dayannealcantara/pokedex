import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../page/Home'

const routes = () =>  (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/pokemon" element={} /> */}
    </Routes>
  );


export default routes;
