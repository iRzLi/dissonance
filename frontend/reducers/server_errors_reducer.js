import { RECEIVE_JOIN_SERVER_ERROR } from '../actions/server_actions';

const serverErrorsReducer = (state = [], action) => {
    const old = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_JOIN_SERVER_ERROR:
            return action.errors;
        default:
            return [];
    }
}

export default serverErrorsReducer;