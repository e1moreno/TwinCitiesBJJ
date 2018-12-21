import React from 'react';
import PropTypes from 'prop-types';

const JoinForm = ({
  firstName,
  lastName,
  email,
  phone,
  additional,
  onChange,
}) => <div />;

JoinForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  additional: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default JoinForm;
