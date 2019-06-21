import { RECEIVE_PRIVATE_ROOMS, RECEIVE_CURRENT_PRIVATE_ROOM} from '../actions/private_room_actions';
import { RECEIVE_PRIVATE_MESSAGE, RECEIVE_PRIVATE_MESSAGES } from '../actions/private_message_actions';

import { merge } from 'lodash';

const privateRoomsReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_PRIVATE_ROOMS:
            return merge({}, oldState, action.res.private_rooms);
        case RECEIVE_CURRENT_PRIVATE_ROOM:
            return merge({}, oldState, { [action.res.private_room.id]: action.res.private_room });
        case RECEIVE_PRIVATE_MESSAGE:
            const newMessage = action.res.private_message;
            let newRoomMessage = merge({}, oldState);
            if (newRoomMessage[newMessage.private_room_id].private_messages_ids.includes(newMessage.id) === false) {
                newRoomMessage[newMessage.private_room_id].private_messages_ids.push(newMessage.id);
            }
            return newRoomMessage;
        default:
            return oldState;
    }
}

export default privateRoomsReducer;