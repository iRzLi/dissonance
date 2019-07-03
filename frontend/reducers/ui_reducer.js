import { combineReducers } from 'redux';

import modal from './modal_reducer';
import uiServersReducer from './ui_servers_reducer';

export default combineReducers({
  modal,
  uiServersReducer,
});
