import React, { Component } from 'react';

import JoinForm from '../components/JoinForm';

class JoinFormContainer extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    additional: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const {
      firstName, lastName, email, phone, additional,
    } = this.state;

    return (
      <JoinForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        additional={additional}
        onChange={this.handleChange}
      />
    );
  }
}

export default JoinFormContainer;
