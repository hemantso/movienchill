import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchTopRatedMovies } from "../actions";
import "../assets/css/moviesList.css";

class TopRatedMovies extends React.Component {
  componentDidMount = async () => {
    this.props.fetchTopRatedMovies();
  };

  render() {
    return (
      <div className="container text-center">
        <h2>TOP RATED</h2>
        <div
          className="row"
          style={{
            justifyContent: "center"
          }}
        >
          {this.props.toprated.map(movie => {
            return (
              <div key={movie.id}>
                <div
                  className="card"
                  style={{
                    width: "10rem"
                  }}
                >
                  <div className="card-img-top">
                    <Link to={`/details/${movie.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w154${
                          movie.poster_path
                        }`}
                        alt={movie.title}
                      />
                    </Link>

                    <span> ☆{movie.vote_average} </span>
                  </div>
                  <div className="card-title">
                    <p> {movie.release_date}</p> <h6>{movie.title}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <hr className="cards-separator" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toprated: state.toprated
  };
};

export default connect(
  mapStateToProps,
  {
    fetchTopRatedMovies
  }
)(TopRatedMovies);