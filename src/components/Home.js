/* eslint-disable */
import React from 'react';
import Slideshow from '../containers/Slideshow';
import MoviesList from './MoviesList';
import MovieSearch from '../containers/MovieSearch';
import Footer from './Footer';

const Home = () => (
  <>
    <MovieSearch />
    <Slideshow />
    <MoviesList />
    <Footer />
  </>
);

export default Home;
