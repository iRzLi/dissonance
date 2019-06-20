import * as PrivateRoomUtil from '../util/private_room_api_util';

export const RECEIVE_PRIVATE_ROOMS = 'RECEIVE_PRIVATE_ROOMS';
export const RECEIVE_CURRENT_PRIVATE_ROOM = 'RECEIVE_CURRENT_PRIVATE_ROOM';
export const REMOVE_CURRENT_PRIVATE_ROOM = 'REMOVE_CURRENT_PRIVATE_ROOM';

//  form needs :user1_id and :user2_id
export const createPrivateRoom = (formRoom) => dispatch => {
    return PrivateRoomUtil.createPrivateRoom(formRoom).then(
        (res) => {
            return dispatch(receiveCurrentPrivateRoom(res))
        }
    );
};

export const receiveCurrentPrivateRoom = (res) => {
    return {
        type: RECEIVE_CURRENT_PRIVATE_ROOM,
        res,
    };
}


export const requestPrivateRoom = id => dispatch => {
    return PrivateRoomUtil.requestPrivateRoom(id).then(
        (res) => dispatch(receiveCurrentPrivateRoom(res))
    );
};

export const requestPrivateRooms = () => dispatch => {
    return PrivateRoomUtil.requestPrivateRooms().then(
        (res) => dispatch(receivePrivateRooms(res))
    );
};

export const receivePrivateRooms = (res) => {
    return {
        type: RECEIVE_PRIVATE_ROOMS,
        res,
    };
}