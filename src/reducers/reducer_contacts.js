import Chance from 'chance';
const chance = new Chance();

import { CONTACT_ADDED, CONTACT_DELETED, CONTACT_EDITED, CONTACT_SORTED } from '../actions/index';

let contacts = [];
for (let i = 0; i < 20; i++) {
  contacts.push({
    id: chance.fbid(),
    name: chance.name(),
    email: chance.email(),
    phone: chance.phone()
  });
}

export default function(state = contacts, action) {
  switch (action.type) {
    case CONTACT_ADDED:
      return [action.payload, ...state];
    case CONTACT_DELETED:
      return state.filter(contact => contact.id !== action.payload.id);
    case CONTACT_EDITED:
      return state.reduce(function(previous, contact) {
              if(contact.id === action.payload.id) {contact = action.payload}
              previous.push(contact);
              return previous;
            }, []);
    case CONTACT_SORTED:
      const prop = action.payload.property;
      if(action.payload.asc) {
        return state.sort((function(a,b) {return (a[prop] > b[prop]) ? 1 : ((b[prop] > a[prop]) ? -1 : 0);} ))
      }
      else {
        return state.sort((function(a,b) {return (a[prop] < b[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);} ))
      }
    default:
      return state;
  }
}
