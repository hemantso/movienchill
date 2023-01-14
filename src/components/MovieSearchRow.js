/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

class MovieRow extends React.Component {
  viewMovie() {} // eslint-disable-line 

  render() {
    const {
      id, title, overview, poster_src  } = this.props.movie;   // eslint-disable-line 

    return (
      <div key={id}>
        <div className="container">
          <div className="col">
            <div className="movie-poster">
              <img alt="poster" width="120" src={poster_src} /> {/* eslint-disable-line */}
              {' '}

            </div>

            <div className="movie-details">
              <h3>{title}</h3>
              <p>{overview}</p>
              <div>
                <Link to={`/details/${id}`}>
                  <button
                    className="btn btn-about"
                    type="button"
                    onClick={this.viewMovie.bind(this)}
                    value="View"
                  >
                    Read More
                    <i className="fas fa-info-circle" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default MovieRow;
