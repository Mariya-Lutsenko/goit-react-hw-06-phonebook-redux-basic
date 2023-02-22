// import { combineReducers } from 'redux';
// import contactsReducer from './contacts/contacts-reducer';
// import filterReducer from './filter/filter-reducer';

// const rootReduser = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// export default rootReduser;

import { ADD_CONTACT, REMOVE_CONTACT } from './contacts/contacts-types';
import { SET_FILTER } from './filter/filter-types';

const initialStore = {
  contacts: [],
  filter: '',
};

const reducer = (store = initialStore, { type, payload }) => {
  // console.log(action);
  switch (type) {
    case ADD_CONTACT:
      const newContacts = [...store.contacts, payload];
      return { ...store, contacts: newContacts };
    case REMOVE_CONTACT:
      const newContactsAfterRemove = store.contacts.filter(
        ({ id }) => id !== payload
      );
      return { ...store, contacts: newContactsAfterRemove };
    case SET_FILTER:
      return { ...store, filter: payload };
    default:
      return store;
  }
};

export default reducer;
