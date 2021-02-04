/* eslint react/prop-types: 0 */
import React from 'react';
import { connect } from 'react-redux';
import { fetchMovieSearch } from '../actions';
import MovieRow from './MovieSearchRow';
import '../assets/css/search.css';
import popcorn from '../assets/img/popcorn.png';

class movieSearch extends React.Component {
  constructor() {
    super();
    this.state = { movieTitle: '' }; // eslint-disable-line
  }

  searchChangeHandler = event => {
    const movieTitle = event.target.value;
    this.props.fetchMovieSearch(movieTitle); // eslint-disable-line
    const movieRows = [];
    const { movieSearch } = this.props;
    movieSearch.map(movie => {
      movie.poster_src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`; // eslint-disable-line
      const movieRow = <MovieRow key={movie.id} movie={movie} />;
      movieRows.push(movieRow);
      return movieRows;
    });
    if (movieTitle !== '') {
      this.setState({ rows: movieRows });
    } else {
      this.setState({ rows: '' });
    }
  };

  render() {
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
              value={this.movieTitle}
              onChange={this.searchChangeHandler}
              placeholder="Search for movie"
            />
          </div>

          <div className="search-results">{this.state.rows}</div> {/* eslint-disable-line */}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  movieSearch: state.movieSearch,
});

export default connect(
  mapStateToProps,
  {
    fetchMovieSearch,
  },
)(movieSearch);
