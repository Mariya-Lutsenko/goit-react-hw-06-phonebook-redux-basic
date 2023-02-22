import { ADD_CONTACT, REMOVE_CONTACT } from './contacts-types';

const initialStore = [];

const contactsReducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      const newContacts = [...store, payload];
      return { ...store, contacts: newContacts };
    case REMOVE_CONTACT:
      const newContactsAfterRemove = store.filter(({ id }) => id !== payload);
      return { ...store, newContactsAfterRemove };

    // case ADD_CONTACT:
    //   return { ...store, payload };
    // case REMOVE_CONTACT:
    //   return store.filter(({ id }) => id !== payload);
    default:
      return store;
  }
};

export default contactsReducer;
