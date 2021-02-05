/* eslint react/prop-types: 0 */
import React, { useState } from "react";
import UpcomingMovies from "./Upcoming";
import TopratedMovies from "./TopRated";
import "../assets/css/moviesList.css";

const MoviesList = () => {
  const [state, setState] = useState({
    topRated: true,
    active: true,
    unactive: false,
  });

  const onClickTopRated = () => {
    setState({
      topRated: true,
      active: true,
      unactive: false,
    });
  };

  const onClickUpcoming = () => {
    setState({
      topRated: false,
      active: false,
      unactive: false,
    });
  };

  const active = state.active ? "active" : "unactive";
  const unactive = state.active ? "unactive" : "active";
  return (
    <>
      <div className="container text-center">
        <button type="button" onClick={onClickTopRated} className={active}>
          Upcoming
        </button>
        <button type="button" onClick={onClickUpcoming} className={unactive}>
          Top Rated
        </button>
        <div className="movie-list mt-5">
          {state.topRated ? <UpcomingMovies /> : <TopratedMovies />}{" "}
        </div>
      </div>
    </>
  );
};

export default MoviesList;
