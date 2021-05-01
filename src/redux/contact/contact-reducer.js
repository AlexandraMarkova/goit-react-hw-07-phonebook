import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  changeFilter,
} from './contact-actions';

const items = createReducer([], {
  [addContactsSuccess]: (state, actions) => [...state, actions.payload],
  [deleteContactsSuccess]: (state, {payload}) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
});
