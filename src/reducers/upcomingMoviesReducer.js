import {
    FETCH_UPCOMING_MOVIES
} from '../constant';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_UPCOMING_MOVIES:
            return action.payload;
        default:
            return state;
    }
};