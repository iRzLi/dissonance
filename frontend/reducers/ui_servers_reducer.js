import { merge } from 'lodash';
import { RECEIVE_CURRENT_SERVER } from '../actions/server_actions';
import { CLEAR_UI_SERVERS } from '../actions/ui_actions';

const uiServersReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_SERVER:
            return ({[action.res.server.id]: action.res.server});
        case CLEAR_UI_SERVERS:
            return null;
        default:
            return null;
    }
}

export default uiServersReducer;