import { combineReducers } from "redux";
import movieSearch from './movieSearch';

export default combineReducers({
    movieSearch: movieSearch
})