import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormTextArea from '../components/FormTextArea';

class FormTextAreaContainer extends Component {
  static propTypes = {
    labelText: PropTypes.string,
    labelProps: PropTypes.object,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    labelText: null,
    labelProps: {},
  };

  state = {
    focus: false,
  };

  handleFocus = () => {
    this.setState({
      focus: true,
    });
  };

  handleBlur = () => {
    this.setState({
      focus: false,
    });
  };

  render() {
    const {
      labelText,
      labelProps,
      id,
      name,
      value,
      onChange,
      ...other
    } = this.props;
    const { focus } = this.state;

    return (
      <FormTextArea
        focus={focus}
        labelText={labelText}
        labelProps={labelProps}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        {...other}
      />
    );
  }
}

export default FormTextAreaContainer;
