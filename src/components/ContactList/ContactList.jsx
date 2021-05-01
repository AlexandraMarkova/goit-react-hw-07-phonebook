import React from 'react';
import { connect } from 'react-redux';
import { deleteContacts } from '../../redux/contact/contact-operations';

const ContactList = ({ contacts, onDeleteContacts }) =>
  contacts !== [] ? (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: <span>{number}</span>
          <button onClick={() => onDeleteContacts(id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;

const getVisibleContacts = (allContacts, filter) => {
  const normalizeFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state.contacts.items, state.contacts.filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContacts: id => dispatch(deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
