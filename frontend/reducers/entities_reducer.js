import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import serversReducer from './servers_reducer';
import roomsReducer from './rooms_reducer';
import messagesReducer from './messages_reducer';
import privateRoomsReducer from './private_rooms_reducer';
import privateMessagesReducer from './private_messages_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    servers: serversReducer,
    rooms: roomsReducer,
    messages: messagesReducer,
    private_rooms: privateRoomsReducer,
    private_messages: privateMessagesReducer,
});

export default entitiesReducer;