import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMovieSearch } from '../actions';
import MovieRow from '../components/MovieSearchRow';
import '../assets/css/search.css';

import popcorn from '../assets/img/popcorn.png';

const movieSearch = props => {
  const [state, setState] = useState({});
  const [title, setTitle] = useState('');

  const searchChangeHandler = event => {
    event.preventDefault();
    setTitle(event.target.value);
    const movieTitle = event.target.value;
    props.fetchMovieSearch(movieTitle); // eslint-disable-line
    const movieRows = [];
    const { movieSearch } = props;
    movieSearch.map(movie => {
      movie.poster_src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`; // eslint-disable-line
      const movieRow = <MovieRow key={movie.id} movie={movie} />;
      movieRows.push(movieRow);
      return movieRows;
    });
    if (movieTitle !== '') {
      setState({ rows: movieRows });
    } else {
      setState({ rows: '' });
    }
  };

  return (
    <>
      <div className="search">
        <div className="search-elements">
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <img
              style={{ height: 50, marginLeft: 10 }}
              src={popcorn}
              alt="movie'n'chill"
            />
            <h3>
              MovieN
              <span>chill</span>
            </h3>
          </div>

          <input
            value={title}
            name="search"
            onChange={event => searchChangeHandler(event)}
            placeholder="Search for movie"
          />
        </div>
        <div className="search-results">{state.rows}</div>
        {' '}
        {/* eslint-disable-line */}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  movieSearch: state.movieSearch,
});

movieSearch.propTypes = {
  movieSearch: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
movieSearch.defaultProps = {
  movieSearch: [],
};
export default connect(mapStateToProps, {
  fetchMovieSearch,
})(movieSearch);
