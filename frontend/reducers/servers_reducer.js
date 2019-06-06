import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import { RECEIVE_CURRENT_SERVER, REMOVE_CURRENT_SERVER } from '../actions/server_actions';
import {RECEIVE_CURRENT_ROOM} from '../actions/room_actions'
const serversReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, action.res.servers);
        case RECEIVE_CURRENT_SERVER:
            return merge({},oldState, {[action.res.server.id]: action.res.server});
        case RECEIVE_CURRENT_ROOM:
            if (action.res.server){
                return merge({}, oldState, { [action.res.server.id]: action.res.server });
            }
            return oldState;
        case REMOVE_CURRENT_SERVER:
            let newState = merge({},oldState);
            delete newState[action.serverId];
            return newState;
        default:
            return oldState;
    }
};

export default serversReducer;