import {
    FETCH_MOVIE_TRAILER
  } from "../constant";
  
  export default (state = [], action) => {
    switch (action.type) {
      case FETCH_MOVIE_TRAILER:
        return action.payload;
      default:
        return state;
    }
  };