import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contact-actions';

const items = createReducer([], {
  [actions.addContacts]: (state, actions) => [...state, actions.payload],
  [actions.deleteContacts]: (state, actions) =>
    state.filter(({ id }) => id !== actions.payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
