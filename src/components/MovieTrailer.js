/* eslint react/prop-types: 0 */
import React from 'react';
import { connect } from 'react-redux';

import { fetchMovieTrailer } from '../actions';
import '../assets/css/trailer.css';

class MovieTrailer extends React.Component {  // eslint-disable-line 
  render() {
    const { movieTrailer } = this.props;
    return (
      <div className="trailer">
        {movieTrailer.map(trailer => (
          <iframe
            width="450"
            height="305"
            title={trailer.name}
            src={`https://www.youtube.com/embed/${trailer.key}`}
            key={trailer.key}
            frameBorder="0"
            allowFullScreen
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieTrailer: state.movieTrailer,
});

export default connect(
  mapStateToProps,
  {
    fetchMovieTrailer,
  },
)(MovieTrailer);
