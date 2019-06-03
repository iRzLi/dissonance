import * as SessionUtil from '../util/session_api_util';

export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_USER_MSG = 'RECEIVE_USER_MSG';

export const login = (formUser) => dispatch => {
    return SessionUtil.login(formUser)
        .then(
            res => dispatch(receiveCurrentUser(res)),
            err => dispatch(receiveSessionErrors(err.responseJSON))
        );
};

export const logout = () => dispatch => {
    return SessionUtil.logout()
        .then(
            () => dispatch(logoutCurrentUser()),
            err => dispatch(receiveSessionErrors(err.responseJSON))
        );
};

export const signup = (formUser) => dispatch => {
    return SessionUtil.signup(formUser)
        .then(
            res => dispatch(receiveCurrentUser(res)),
            err => dispatch(receiveSessionErrors(err.responseJSON))
        );
};

export const requestCurrentUser = id => dispatch => {
    return SessionUtil.requestUser(id).then(
        res => dispatch(receiveCurrentUser(res)),
        err => dispatch(receiveSessionErrors(err.responseJSON))
        );
};

export const receiveCurrentUser = res => {
    return {
        type: RECEIVE_CURRENT_USER,
        res,
    };
};

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    };
};


export const receiveSessionErrors = err => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors: err,
    };
};

export const receiveUserMsg = (res) => {
    return {
        type: RECEIVE_USER_MSG,
        res,
    };
};