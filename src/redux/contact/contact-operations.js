import axios from 'axios';
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from './contact-actions';

axios.defaults.baseURL = ' http://localhost:3004';

export const addContacts = ({ name, number }) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactsRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch(error => dispatch(addContactsError(error)));
};


export const deleteContacts = ( id ) => dispatch => {

  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactsSuccess(id)))
    .catch(error => dispatch(deleteContactsError(error)));
};
