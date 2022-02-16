import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListPokemon from '../page/ListPokemon'

const routes = () =>  (
    <Routes>
      <Route path="/" element={<ListPokemon />} />
      {/* <Route path="/pokemon" element={} /> */}
    </Routes>
  );


export default routes;
