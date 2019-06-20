import { RECEIVE_PRIVATE_ROOMS, RECEIVE_CURRENT_PRIVATE_ROOM} from '../actions/private_room_actions';

import { merge } from 'lodash';

const privateRoomsReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_PRIVATE_ROOMS:
            return merge({}, oldState, action.res.private_rooms);
        case RECEIVE_CURRENT_PRIVATE_ROOM:
            return merge({}, oldState, { [action.res.private_room.id]: action.res.private_room });
        default:
            return oldState;
    }
}

export default privateRoomsReducer;