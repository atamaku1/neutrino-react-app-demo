import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label }) => (
  <input placeholder={label}/>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Input;
