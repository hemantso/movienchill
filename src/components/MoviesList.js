/* eslint react/prop-types: 0 */
import React from 'react';
import UpcomingMovies from './Upcoming';
import TopratedMovies from './TopRated';
import '../assets/css/moviesList.css';

class MoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topRated: true, // eslint-disable-line 
      active: true,
      unactive: false, // eslint-disable-line 
    };
  }

  onClickTopRated = () => {
    this.setState({
      topRated: true, // eslint-disable-line 
      active: true,
      unactive: false, // eslint-disable-line 
    });
  };

  onClickUpcoming = () => {
    this.setState({
      topRated: false, // eslint-disable-line 
      active: false,
      unactive: false, // eslint-disable-line 
    });
  };

  render() {
    const active = this.state.active ? 'active' : 'unactive'; // eslint-disable-line 
    const unactive = this.state.active ? 'unactive' : 'active'; // eslint-disable-line 
    const { topRated } = this.props;
    return (
      <>
        <div className="container text-center">
          <button type="button" onClick={this.onClickTopRated} className={active}>
            Upcoming
          </button>
          <button type="button" onClick={this.onClickUpcoming} className={unactive}>
            Top Rated
          </button>
          <div className="movie-list mt-5">
            {topRated ? <UpcomingMovies /> : <TopratedMovies />}
            {' '}

          </div>
        </div>
      </>
    );
  }
}

export default MoviesList;
