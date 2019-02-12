import React from 'react';
import PropTypes from 'prop-types';

import FormTextArea from '../components/FormTextArea';
import useFocus from './useFocus';

const FormTextAreaContainer = ({
  labelText,
  labelProps,
  id,
  name,
  value,
  onChange,
  ...other
}) => {
  const { focus, handleFocus, handleBlur } = useFocus(false);

  return (
    <FormTextArea
      focus={focus}
      labelText={labelText}
      labelProps={labelProps}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...other}
    />
  );
};
FormTextAreaContainer.propTypes = {
  labelText: PropTypes.string,
  labelProps: PropTypes.object,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

FormTextAreaContainer.defaultProps = {
  labelText: null,
  labelProps: {},
};

export default FormTextAreaContainer;
