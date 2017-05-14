export const CONTACT_ADDED = 'CONTACT_ADDED';
export const CONTACT_DELETED = 'CONTACT_DELETED';
export const CONTACT_EDITED = 'CONTACT_EDITED';
export const CONTACT_SORTED = 'CONTACT_SORTED';

export function addContact(contact) {
  return {
    type: CONTACT_ADDED,
    payload: contact
  };
}

export function deleteContact(contact) {
  return {
    type: CONTACT_DELETED,
    payload: contact
  };
}

export function editContact(contact) {
  return {
    type: CONTACT_EDITED,
    payload: contact
  }
}

export function sortContact(sort) {
  return {
    type: CONTACT_SORTED,
    payload: sort
  }
}
