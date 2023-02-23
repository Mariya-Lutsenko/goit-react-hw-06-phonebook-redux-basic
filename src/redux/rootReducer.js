import { combineReducers } from 'redux';
import contactsReducer from './contacts/contacts-reducer';
import filterReducer from './filter/filter-reducer';

const rootReduser = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReduser;
