import { RECEIVE_PRIVATE_ROOMS, RECEIVE_CURRENT_PRIVATE_ROOM } from '../actions/private_room_actions';

import {RECEIVE_PRIVATE_MESSAGE, RECEIVE_PRIVATE_MESSAGES} from '../actions/private_message_actions';

import { merge } from 'lodash';

const privateMessagesReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_PRIVATE_ROOMS:
            return merge({}, oldState, action.res.private_messages);
        case RECEIVE_CURRENT_PRIVATE_ROOM:
            return merge({}, oldState, action.res.private_messages);
        case RECEIVE_PRIVATE_MESSAGES:
            return merge({}, oldState, action.res.private_messages);
        case RECEIVE_PRIVATE_MESSAGE:
            return merge({}, oldState, { [action.res.private_message.id]: action.res.private_message });
        default:
            return oldState;
    }
}

export default privateMessagesReducer;