import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const HomeContext = React.createContext();

class HomeContextProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    joinRef: React.createRef(),
  };

  render() {
    const { children } = this.props;

    return (
      <HomeContext.Provider
        value={{
          ...this.state,
        }}
      >
        {children}
      </HomeContext.Provider>
    );
  }
}

export default HomeContextProvider;
