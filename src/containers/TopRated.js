/* eslint react/prop-types: 0 */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { fetchTopRatedMovies } from '../actions';
import '../assets/css/moviesList.css';

const TopRatedMovies = (props) => {
  useEffect(() => {
    fetchTopRatedMovies();
  });
  const { toprated } = props;
  return (
    <div className="container text-center">
      <h2>TOP RATED</h2>
      <div
        className="row"
        style={{
          justifyContent: 'center',
        }}
      >
        {toprated.map(movie => (
          <div key={movie.id}>
            <div
              className="card"
              style={{
                width: '10rem',
              }}
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
          </div>
        ))}
      </div>
      <hr className="cards-separator" />
    </div>
  );
};

const mapStateToProps = state => ({
  toprated: state.toprated,
});

// TopRatedMovies.propTypes = {
//   id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   poster_path: PropTypes.string.isRequired,
//   vote_average: PropTypes.string.isRequired,
//   release_date: PropTypes.string.isRequired,
// };
export default connect(mapStateToProps, {
  fetchTopRatedMovies,
})(TopRatedMovies);
