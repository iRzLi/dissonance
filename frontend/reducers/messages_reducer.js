import { RECEIVE_CURRENT_USER, RECEIVE_USER_MSG } from '../actions/session_actions';
import { merge } from 'lodash';
import { RECEIVE_CURRENT_SERVER } from '../actions/server_actions';
import { RECEIVE_CURRENT_ROOM } from '../actions/room_actions';
import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, action.res.messages);
        case RECEIVE_CURRENT_SERVER:
            return merge({}, oldState, action.res.messages);
        case RECEIVE_CURRENT_ROOM:
            return merge({}, oldState, action.res.messages);
        case RECEIVE_MESSAGES:
            return merge({}, oldState, action.res.messages);
        case RECEIVE_MESSAGE:
            return merge({},oldState, {[action.res.message.id]:action.res.message});
        case RECEIVE_USER_MSG:
            return merge({}, oldState, { [action.res.message.id]: action.res.message });
        default:
            return oldState;
    }
};

export default messagesReducer;