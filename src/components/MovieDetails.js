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
import leftArrow from '../assets/img/left-arrow.svg';

class MovieDetails extends React.Component {
  componentDidMount = async () => {
    const movieId = this.props.match.params.id; // eslint-disable-line 
    this.props.fetchMovieDetails(movieId); // eslint-disable-line 
    this.props.fetchMovieCredits(movieId); // eslint-disable-line 
    this.props.fetchMovieTrailer(movieId); // eslint-disable-line 
  };

  render() {
    const details = this.props.movieDetails; // eslint-disable-line 
    const credit = this.props.movieCredits; // eslint-disable-line 
    return (
      <>
        <div
          className="jumbotron"
          style={{
            background: `url(${`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}) center top no-repeat / cover`,
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
                src={`https://image.tmdb.org/t/p/w154/${details.poster_path}`}
                alt={details.original_title}
              />
              <div className="movie-description-text">
                <span>{details.release_date}</span>
                <h1>{details.original_title}</h1>
                <p>
                  {' '}
                  ☆
                  {details.vote_average}
                </p>
                <em>
                  &quot;
                  {details.tagline}
                  {' '}
                  &quot;
                </em>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h3>{details.overview}</h3>
          <div className="actors">
            <h2>Actors</h2>
            <div className="row">
              {credit.map((actor, i) => {
                if (i <= 9) {
                  return (
                    <div className="col actor" key={`${actor}`}>
                      {' '}
                      <img
                        className="side-image"
                        src={`https://image.tmdb.org/t/p/w154/${actor.profile_path}`}
                        alt={details.original_title}
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
export default connect(mapStateToProps, {
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieTrailer,
})(MovieDetails);
