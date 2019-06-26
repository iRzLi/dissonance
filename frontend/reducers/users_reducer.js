import { RECEIVE_CURRENT_USER, RECEIVE_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import { RECEIVE_CURRENT_SERVER } from '../actions/server_actions';
import { RECEIVE_USER_MSG } from '../actions/session_actions';
import { RECEIVE_CURRENT_ROOM } from '../actions/room_actions';
import { RECEIVE_PRIVATE_ROOMS, RECEIVE_CURRENT_PRIVATE_ROOM } from '../actions/private_room_actions';
// import { LOGOUT_CURRENT_USER } from '../actions/session_actions';


const usersReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, { [action.res.user.id]: action.res.user }, action.res.users);
        case RECEIVE_CURRENT_SERVER:
            return merge({},oldState, action.res.users);
        case RECEIVE_CURRENT_ROOM:
            return merge({}, oldState, action.res.users);
        case RECEIVE_CURRENT_PRIVATE_ROOM:
            return merge({}, oldState, action.res.users);
        case RECEIVE_PRIVATE_ROOMS:
            return merge({}, oldState, action.res.users);
        case RECEIVE_USER_MSG:
            let newUser = action.res.user;
            action.res.user.message_ids.push(action.res.message.id);
            return merge({},oldState, {[newUser.id]:newUser});
        default:
            return oldState;
    }
};

export default usersReducer;