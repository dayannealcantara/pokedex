import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../page/Home';
import Pokemon from '../page/Pokemon';
import Favoritos from '../page/Favoritos';

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="pokemon/:name" element={<Pokemon />} />
      <Route path="meus-favoritos" element={<Favoritos />} />
    </Routes>
  );
}

export default routes;
