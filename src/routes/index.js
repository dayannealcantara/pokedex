import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../page/Home';
import Pokemon from '../page/Pokemon';

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="pokemon/:name" element={<Pokemon />} />
    </Routes>
  );
}

export default routes;
