import {
  combineReducers,
} from 'redux';
import upcomingMoviesReducer from './upcomingMoviesReducer';
import popularMoviesReducer from './popularMoviesReducer';
import topRatedMoviesReducer from './topRatedMoviesReducer';
import movieDetails from './movieDetails';
import movieCredits from './movieCredits';
import movieTrailer from './movieTrailer';
import movieSearch from './movieSearch';

export default combineReducers({
  slideshow: popularMoviesReducer,
  upcoming: upcomingMoviesReducer,
  toprated: topRatedMoviesReducer,
  movieDetails,
  movieCredits,
  movieTrailer,
  movieSearch,
});
