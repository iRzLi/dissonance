import * as ServerUtil from '../util/server_api_util';

export const RECEIVE_CURRENT_SERVER = 'RECEIVE_CURRENT_SERVER';
export const REMOVE_CURRENT_SERVER = 'REMOVE_CURRENT_SERVER';
// export const SERVER_ERRORS = 'SERVER_ERRORS';


//  user id is from current_user on the backend
export const createServer = (formServer) => dispatch => {
    return ServerUtil.createServer(formServer).then(
        res => dispatch(receiveCurrentServer(res))
    );
};

/**
 *
 * server : {}
 *
 * users: {
 *   1:{},
 *   2:{}
 * }
 * rooms: {
 *   1:{},
 *   2:{}
 * }
 * messages: {
 *   1:{},
 *   2:{}
 * }
 */
export const receiveCurrentServer = (res) => {
    return {
        type: RECEIVE_CURRENT_SERVER,
        res,
    };
};

export const deleteServer = id => dispatch => {
    return ServerUtil.deletetServer(id).then(
        () => dispatch(removeCurrentServer(id)) 
    );
};

export const removeCurrentServer = (id) => {
    return {
        type: REMOVE_CURRENT_SERVER,
        serverId: id,
    };
};

export const requestServer = id => dispatch => {
    return ServerUtil.requestServer(id).then(
        (res) => dispatch(receiveCurrentServer(res))
    );
};

export const joinServer = id => dispatch => {
    return ServerUtil.joinServer(id).then(
        (res) => dispatch(receiveCurrentServer(res))
    );
};

