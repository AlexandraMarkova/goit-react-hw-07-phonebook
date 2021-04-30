import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addContacts = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

export const deleteContacts = createAction('contacts/delete');

export const changeFilter = createAction('contacts/changeFilter');
