import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import { RECEIVE_CURRENT_SERVER } from '../actions/server_actions';

const usersReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, { [action.res.user.id]: action.res.user });
        case RECEIVE_CURRENT_SERVER:
            return merge({},oldState, action.res.users);
        default:
            return oldState;
    }
};

export default usersReducer;