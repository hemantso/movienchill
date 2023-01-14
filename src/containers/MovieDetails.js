/* eslint-disable */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieTrailer,
} from '../actions';
import MovieTrailer from './MovieTrailer';
import Footer from '../components/Footer';
import '../assets/css/details.css';
import leftArrow from '../assets/img/left-arrow.svg';

const MovieDetails = props => {
  const { id } = useParams()
  
  useEffect(() => {
    
    props.fetchMovieDetails(id);
    props.fetchMovieCredits(id);
    props.fetchMovieTrailer(id);
  }, []);
  

  const { movieDetails, movieCredits } = props;

  return (
    <>
      <div
        className="jumbotron"
        style={{
          background: `url(${`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}) center top no-repeat / cover`,
        }}
      >
        <div className="overlay" />
        <Link to="/">
          <button type="button">
            <img
              src={leftArrow}
              alt="previous button"
            />
          </button>
        </Link>

        <div className="movie-description container">
          <div className="description-details">
            <img
              className="side-image"
              src={`https://image.tmdb.org/t/p/w154/${movieDetails.poster_path}`}
              alt={movieDetails.original_title}
            />
            <div className="movie-description-text">
              <span>{movieDetails.release_date}</span>
              <h1>{movieDetails.original_title}</h1>
              <p>
                {' '}
                ☆
                {movieDetails.vote_average}
              </p>
              <em>
                &quot;
                {movieDetails.tagline}
                {' '}
                &quot;
              </em>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h3>{movieDetails.overview}</h3>
        <div className="actors">
          <h2>Actors</h2>
          <div className="row">
            {movieCredits.map((actor, i) => {
              if (i <= 9) {
                return (
                  <div className="col actor" key={`${actor},${i}`}> {/*eslint-disable-line*/}
                    {' '}
                    <img
                      className="side-image"
                      src={`https://image.tmdb.org/t/p/w154/${actor.profile_path}`}
                      alt={movieDetails.original_title}
                    />
                    <p>{actor.name}</p>
                  </div>
                );
              }
              return props.state; {/*eslint-disable-line*/}
            })}
          </div>
        </div>
      </div>
      <div className=" text-center mt-5">
        <h2>Trailers</h2>
        <MovieTrailer />
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = state => ({
  movieDetails: state.movieDetails,
  movieCredits: state.movieCredits,
  movieTrailer: state.movieTrailer,
});

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }),
  fetchMovieDetails: PropTypes.func.isRequired,
  fetchMovieCredits: PropTypes.func.isRequired,
  fetchMovieTrailer: PropTypes.func.isRequired,
  movieDetails: PropTypes.objectOf(
    PropTypes.shape({
      tagline: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      backdrop_path: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      release_date: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      adult: PropTypes.bool,
    }),
  ),
  movieCredits: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),

};
MovieDetails.defaultProps = {
  match: {},
  movieDetails: {},
  movieCredits: [],
};

export default connect(mapStateToProps, {
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieTrailer,
})(MovieDetails);
