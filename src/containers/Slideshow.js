/* eslint react/prop-types: 0 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Swiper from 'swiper';
import { fetchPopularMovies } from '../actions';
import '../assets/css/slideshow.css';

class Slideshow extends React.Component {
  componentDidMount = async () => {
    this.props.fetchPopularMovies(); // eslint-disable-line 
  };

  render() {
    (() => {
      const sliderEl = document.querySelectorAll('.swiper-container');
      if (!sliderEl) {
        return;
      }
      new Swiper(sliderEl, { // eslint-disable-line 
        init: true,
        loop: true,
        slidesPerView: 1,
        observer: true,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    })();
    const { slideshow } = this.props;
    return (

      <>
        <div className="carousel-container" data-wow-duration="3s">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {slideshow.map(movie => (
                <div
                  key={movie.id}
                  className="swiper-slide"
                  style={{
                    backgroundImage: `url(${`https://image.tmdb.org/t/p/original${movie.backdrop_path}`})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div className="description">
                    <h3 className="swiper-slide__title">{movie.title}</h3>
                    <p>{movie.overview}</p>
                    <p className="swiper-slide-rating">
                      Rating: ☆
                      {' '}
                      {movie.vote_average}
                    </p>
                    <div className="description-buttons">
                      <Link to={`/details/${movie.id}`}>
                        <button type="button" className="btn btn-about">
                          Read More
                          <i className="fas fa-info-circle" />
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="overlay" />
                </div>
              ))}
            </div>

            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>

          <hr className="carousel-container__separator" />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  slideshow: state.slideshow,
});

Slideshow.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  backdrop_path: PropTypes.string.isRequired,
  vote_average: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
}
export default connect(mapStateToProps, {
  fetchPopularMovies,
})(Slideshow);
