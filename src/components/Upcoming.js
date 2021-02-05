/* eslint react/prop-types: 0 */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUpcomingMovies } from "../actions";
import PropTypes from 'prop-types';
import "../assets/css/moviesList.css";

const UpcomingMovies = ({ upcoming, fetchUpcomingMovies }) => {
  useEffect(() => {
    fetchUpcomingMovies();
  });

  return (
    <div className="container text-center">
      <h2> UPCOMING </h2>
      <div
        className="row"
        style={{
          justifyContent: "center",
        }}
      >
        {upcoming.map((movie) => (
          <div
            className="card"
            style={{
              width: "10rem",
            }}
            key={movie.id}
          >
            <div className="card-img-top">
              <Link to={`/details/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <span> ☆{movie.vote_average}</span>
            </div>
            <div className="card-title">
              <p> {movie.release_date}</p> <h6>{movie.title}</h6>
            </div>
          </div>
        ))}
      </div>
      <hr className="cards-separator" />
    </div>
  );
};

const mapStateToProps = (state) => ({
  upcoming: state.upcoming,
});

UpcomingMovies.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  vote_average: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
}
export default connect(mapStateToProps, {
  fetchUpcomingMovies,
})(UpcomingMovies);
