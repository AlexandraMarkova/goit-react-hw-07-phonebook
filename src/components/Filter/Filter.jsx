import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contact/contact-actions';

const Filter = ({ value, onChange }) => (
  <div>
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
