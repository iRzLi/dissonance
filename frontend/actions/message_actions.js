import * as MessageUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
// export const REMOVE_CURRENT_MESSAGE = 'REMOVE_CURRENT_MESSAGE';


export const createMessage = (roomId, messageBody) => dispatch => {
    return MessageUtil.createMessage(roomId,messageBody).then(
        (res) => dispatch(receiveMessage(res))
    );
};

/**
 *
 * messages: {
 *   1:{},
 *   2:{}
 * }
 */

export const receiveMessages = (res) => {
    return {
        type: RECEIVE_MESSAGES,
        res,
    };
};

export const receiveMessage = (res) => {
    return {
        type: RECEIVE_MESSAGE,
        res,
    };
};

export const requestMessages = roomId => dispatch => {
    return MessageUtil.requestRoomMessages(roomId).then(
        (res) => dispatch(receiveMessages(res))
    );
};

// export const deleteMessage = id => dispatch => {
//     return MessageUtil.deletetMessage(id).then(
//         () => dispatch(removeCurrentMessage(id))
//     );
// };

// export const removeCurrentMessage = (id) => {
//     return {
//         type: REMOVE_CURRENT_MESSAGE,
//         messageId: id,
//     };
// };

