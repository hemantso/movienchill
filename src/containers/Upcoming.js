/* eslint-disable */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchUpcomingMovies } from '../actions';
import '../assets/css/moviesList.css';

const UpcomingMovies = props => {
  useEffect(() => {
    props.fetchUpcomingMovies();
  });
  const { upcoming } = props;
  return (
    <div className="container text-center">
      <h2> UPCOMING </h2>
      <div
        className="row"
        style={{
          justifyContent: 'center',
        }}
      >
        {upcoming.map(movie => (
          <div
            className="card"
            style={{
              width: '10rem',
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
              <span>
                {' '}
                ☆
                {movie.vote_average}
              </span>
            </div>
            <div className="card-title">
              <p>
                {' '}
                {movie.release_date}
              </p>
              {' '}
              <h6>{movie.title}</h6>
            </div>
          </div>
        ))}
      </div>
      <hr className="cards-separator" />
    </div>
  );
};

const mapStateToProps = state => ({
  upcoming: state.upcoming,
});

UpcomingMovies.propTypes = {
  fetchUpcomingMovies: PropTypes.func.isRequired,
  upcoming: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      release_date: PropTypes.string.isRequired,
    }),
  ),
};
UpcomingMovies.defaultProps = {
  upcoming: [],
};
export default connect(mapStateToProps, {
  fetchUpcomingMovies,
})(UpcomingMovies);
