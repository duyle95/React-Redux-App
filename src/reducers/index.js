import { combineReducers } from 'redux';
import contacts from './reducer_contacts';

const rootReducer = combineReducers({
  contacts
});

export default rootReducer;
