import React from "react";
import UpcomingMovies from "./Upcoming";
import TopratedMovies from "./TopRated";
import "../assets/css/moviesList.css";

class MoviesList extends React.Component {
  state = {
    topRated: true,
    active: true,
    unactive: false
  };

  onClickTopRated = () => {
    this.setState({
      topRated: true,
      active: true,
      unactive: false
    });
  };

  onClickUpcoming = () => {
    this.setState({
      topRated: false,
      active: false,
      unactive: false
    });
  };

  render() {
    let active = this.state.active ? "active" : "unactive";
    let unactive = this.state.active ? "unactive" : "active";
    return (
      <>
        <div className="container text-center">
          <button onClick={this.onClickTopRated} className={active}>
            Upcoming
          </button>
          <button onClick={this.onClickUpcoming} className={unactive}>
            Top Rated
          </button>
          <div className="movie-list mt-5">
            {this.state.topRated ? <UpcomingMovies /> : <TopratedMovies />}
          </div>
        </div>
      </>
    );
  }
}

export default MoviesList;