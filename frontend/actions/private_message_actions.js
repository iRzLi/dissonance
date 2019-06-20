import * as PrivateMessageUtil from '../util/private_message_api_util';

export const RECEIVE_PRIVATE_MESSAGES = 'RECEIVE_PRIVATE_MESSAGES';
export const RECEIVE_PRIVATE_MESSAGE = 'RECEIVE_PRIVATE_MESSAGE';

export const createPrivateMessage = (roomId, messageBody) => dispatch => {
    return PrivateMessageUtil.createPrivateMessage(roomId, messageBody).then(
        (res) => dispatch(receivePrivateMessage(res))
    );
};

export const receivePrivateMessage = res => {
    return {
        type: RECEIVE_PRIVATE_MESSAGE,
        res,
    };
}

export const receivePrivateMessages = res => {
    return {
        type: RECEIVE_PRIVATE_MESSAGES,
        res,
    };
}

export const requestPrivateMessages = roomId => dispatch => {
    return MessageUtil.requestPrivateRoomMessages(roomId).then(
        (res) => dispatch(receivePrivateMessages(res))
    );
};