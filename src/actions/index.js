import movieApi from "../apis/movieapi";
import {
    FETCH_POPULAR_MOVIES,
    FETCH_TOP_RATED_MOVIES,
    FETCH_UPCOMING_MOVIES,
    FETCH_MOVIE_DETAILS,
    FETCH_MOVIE_CREDITS,
    FETCH_MOVIE_TRAILER,
    FETCH_MOVIE_SEARCH,
  } from '../constant'

export const fetchPopularMovies = () => async dispatch => {
    const response = await movieApi.get(
        `/movie/popular?api_key=9b2a89530a87ba66ebd0b27ef292906c`
    );
    dispatch({
        type: FETCH_POPULAR_MOVIES,
        payload: response.data.results
    })
};