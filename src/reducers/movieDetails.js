/* eslint-disable */
import {
  FETCH_MOVIE_DETAILS,
} from '../constant';

const initialState = {

};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS:
      return action.payload;
    default:
      return state;
  }
};
