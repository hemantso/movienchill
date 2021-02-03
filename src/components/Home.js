import React from "react";
import Slideshow from "./Slideshow";
import MoviesList from "./MoviesList";
import MovieSearch from "./MovieSearch";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <MovieSearch />
      <Slideshow />
      <MoviesList />
      <Footer />
    </>
  );
};

export default Home;