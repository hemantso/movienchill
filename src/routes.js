/* eslint-disable */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MovieDetails from './containers/MovieDetails';

const MainRoutes = () => (
  <Routes>
    <Route path="/details/:id" exact element={<MovieDetails />} />
    <Route path="/" element={<Home />} />
  </Routes>
);
export default MainRoutes;
