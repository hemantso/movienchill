/* eslint react/prop-types: 0 */
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { fetchMovieTrailer } from '../actions';
import '../assets/css/trailer.css';

const MovieTrailer = (props) => {  // eslint-disable-line 
  const { movieTrailer } = props;

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
};

const mapStateToProps = state => ({
  movieTrailer: state.movieTrailer,
});

// MovieTrailer.propTypes = {
//   key: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };
export default connect(
  mapStateToProps,
  {
    fetchMovieTrailer,
  },
)(MovieTrailer);
