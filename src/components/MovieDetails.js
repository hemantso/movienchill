/* eslint react/prop-types: 0 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieTrailer,
} from '../actions';
import MovieTrailer from './MovieTrailer';
import Footer from './Footer';
import '../assets/css/details.css';
import PropTypes from 'prop-types';
import leftArrow from '../assets/img/left-arrow.svg';

class MovieDetails extends React.Component {
  componentDidMount = async () => {
    const movieId = this.props.match.params.id; // eslint-disable-line 
    this.props.fetchMovieDetails(movieId); // eslint-disable-line 
    this.props.fetchMovieCredits(movieId); // eslint-disable-line 
    this.props.fetchMovieTrailer(movieId); // eslint-disable-line 
  };

  render() {
    const {movieDetails, movieCredits } = this.props; 
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
                    <div className="col actor" key={`${actor}`}>
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
                return this.props.state; // eslint-disable-line 
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
  }
}
const mapStateToProps = state => ({
  movieDetails: state.movieDetails,
  movieCredits: state.movieCredits,
  movieTrailer: state.movieTrailer,
});

MovieDetails.propTypes = {
  movieDetails: PropTypes.objectOf(PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
  })),
  movieCredits: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    profile_path: PropTypes.string.isRequired,
  }))
}
export default connect(mapStateToProps, {
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieTrailer,
})(MovieDetails);
