import movieApi from '../apis/movieapi';
import {
  FETCH_POPULAR_MOVIES,
  FETCH_TOP_RATED_MOVIES,
  FETCH_UPCOMING_MOVIES,
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIE_CREDITS,
  FETCH_MOVIE_TRAILER,
  FETCH_MOVIE_SEARCH,
} from '../constant';

export const fetchPopularMovies = () => async dispatch => {
  const response = await movieApi.get(
    '/movie/popular?api_key=9b2a89530a87ba66ebd0b27ef292906c',
  );
  dispatch({
    type: FETCH_POPULAR_MOVIES,
    payload: response.data.results,
  });
};

export const fetchUpcomingMovies = () => async dispatch => {
  const response = await movieApi.get(
    '/movie/upcoming?api_key=9b2a89530a87ba66ebd0b27ef292906c',
  );
  dispatch({
    type: FETCH_UPCOMING_MOVIES,
    payload: response.data.results,
  });
};

export const fetchTopRatedMovies = () => async dispatch => {
  const response = await movieApi.get(
    '/movie/top_rated?api_key=9b2a89530a87ba66ebd0b27ef292906c',
  );
  dispatch({
    type: FETCH_TOP_RATED_MOVIES,
    payload: response.data.results,
  });
};

export const fetchMovieDetails = movieId => async dispatch => {
  const response = await movieApi.get(
    `/movie/${movieId}?api_key=9b2a89530a87ba66ebd0b27ef292906c`,
  );
  dispatch({
    type: FETCH_MOVIE_DETAILS,
    payload: response.data,
  });
};

export const fetchMovieCredits = movieId => async dispatch => {
  const response = await movieApi.get(
    `/movie/${movieId}/credits?api_key=9b2a89530a87ba66ebd0b27ef292906c`,
  );
  dispatch({
    type: FETCH_MOVIE_CREDITS,
    payload: response.data.cast,
  });
};

export const fetchMovieTrailer = movieId => async dispatch => {
  const response = await movieApi.get(
    `/movie/${movieId}/videos?api_key=9b2a89530a87ba66ebd0b27ef292906c`,
  );
  dispatch({
    type: FETCH_MOVIE_TRAILER,
    payload: response.data.results,
  });
};

export const fetchMovieSearch = movieTitle => async dispatch => {
  const response = await movieApi.get(
    `/search/movie?api_key=9b2a89530a87ba66ebd0b27ef292906c&query=${movieTitle}`,
  );
  dispatch({
    type: FETCH_MOVIE_SEARCH,
    payload: response.data.results,
  });
};
