import { combineReducers } from "redux";
import movieSearch from './movieSearch';
import movieDetails from './movieDetails';

export default combineReducers({
    movieSearch: movieSearch,
    movieDetails: movieDetails,
})