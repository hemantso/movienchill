import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Swiper from 'swiper';
import { fetchPopularMovies } from '../actions';
import '../assets/css/slideshow.css';

class Slideshow extends React.Component {
  state = { isOpen: false };

  componentDidMount = async () => {
    this.props.fetchPopularMovies();
  };

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    (() => {
      const sliderEl = document.querySelectorAll('.swiper-container');
      if (!sliderEl) {
        return;
      }
      new Swiper(sliderEl, {
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

    return (
      <>
        <div className="carousel-container" data-wow-duration="3s">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {this.props.slideshow.map(movie => (
                <div
                  key={movie.id}
                  className="swiper-slide"
                  style={{
                    backgroundImage: `url(${`https://image.tmdb.org/t/p/original${
                      movie.backdrop_path
                    }`})`,
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
                        <button className="btn btn-about">
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

export default connect(
  mapStateToProps,
  {
    fetchPopularMovies,
  },
)(Slideshow);
