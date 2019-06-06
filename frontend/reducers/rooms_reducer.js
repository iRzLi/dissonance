import { RECEIVE_CURRENT_USER, RECEIVE_USER_MSG } from '../actions/session_actions';
import { merge } from 'lodash';
import {RECEIVE_CURRENT_SERVER} from '../actions/server_actions';
import { RECEIVE_CURRENT_ROOM, REMOVE_CURRENT_ROOM } from '../actions/room_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';

const roomsReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, action.res.rooms);
        case RECEIVE_CURRENT_SERVER:
            return merge({}, oldState, action.res.rooms);
        case RECEIVE_CURRENT_ROOM:
            return merge({},oldState, action.res.rooms);
        case REMOVE_CURRENT_ROOM:
            let newState = merge({}, oldState);
            delete newState[action.roomId];
            return newState;
        case RECEIVE_USER_MSG:
            const newMessage = action.res.message;
            let newRoomMessage = merge({}, oldState);
            if (newRoomMessage[newMessage.room_id].message_ids.includes(newMessage.id)===false){
                newRoomMessage[newMessage.room_id].message_ids.push(newMessage.id);
            }
            return newRoomMessage;

        default:
            return oldState;
    }
};

export default roomsReducer;