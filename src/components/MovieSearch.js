import React from "react";
import { connect } from "react-redux";
import { fetchMovieSearch } from "../actions";
import MovieRow from "./MovieSearchRow";
import "../assets/css/search.css";

class movieSearch extends React.Component {
  state = { movie_title: "" };

  searchChangeHandler = event => {
    const movie_title = event.target.value;
    this.props.fetchMovieSearch(movie_title);
    var movieRows = [];

    this.props.movieSearch.map(movie => {
      movie.poster_src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
      const movieRow = <MovieRow key={movie.id} movie={movie} />;
      movieRows.push(movieRow);
      return movieRows
    });
    if (movie_title !== "") {
      this.setState({ rows: movieRows });
    } else {
      this.setState({ rows: "" });
    }
  };
  render() {
    return (
      <>
        <div className="search">
          <div className="search-elements">
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <h3>Cool<span>Movies</span></h3>
            </div>

            <input
              value={this.movie_title}
              onChange={this.searchChangeHandler}
              placeholder="Search for movie"
            />
          </div>

          <div className="search-results">{this.state.rows}</div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    movieSearch: state.movieSearch
  };
};

export default connect(
  mapStateToProps,
  {
    fetchMovieSearch
  }
)(movieSearch);