import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import {RECEIVE_CURRENT_SERVER} from '../actions/server_actions';
import { RECEIVE_CURRENT_ROOM, REMOVE_CURRENT_ROOM } from '../actions/room_actions';

const roomsReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, action.res.rooms);
        case RECEIVE_CURRENT_SERVER:
            return merge({}, oldState, action.res.rooms);
        case RECEIVE_CURRENT_ROOM:
            return merge({},oldState, {[action.res.room]:action.res.room});
        case REMOVE_CURRENT_ROOM:
            let newState = merge({}, oldState);
            delete newState[action.roomId];
            return newState;
        default:
            return oldState;
    }
};

export default roomsReducer;