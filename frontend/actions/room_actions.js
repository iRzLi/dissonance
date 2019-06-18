import * as RoomUtil from '../util/room_api_util';

export const RECEIVE_CURRENT_ROOM = 'RECEIVE_CURRENT_ROOM';
export const REMOVE_CURRENT_ROOM = 'REMOVE_CURRENT_ROOM';
import { receiveCurrentServer } from './server_actions';

//  form needs :name and :server_id
export const createRoom = (formRoom) => dispatch => {
    return RoomUtil.createRoom(formRoom).then(
        (res) => dispatch(receiveCurrentServer(res))
    );
};

/**
 *
 * room : {},
 * messages: {
 *   1:{},
 *   2:{}
 * }
 */

export const receiveCurrentRoom = (res) => {
    return {
        type: RECEIVE_CURRENT_ROOM,
        res,
    };
};

export const deleteRoom = id => dispatch => {
    return RoomUtil.deletetRoom(id).then(
        () => dispatch(removeCurrentRoom(id))
    );
};

export const removeCurrentRoom = (id) => {
    return {
        type: REMOVE_CURRENT_ROOM,
        roomId: id,
    };
};

export const requestRoom = id => dispatch => {
    return RoomUtil.requestRoom(id).then(
        (res) => dispatch(receiveCurrentRoom(res))
    );
};