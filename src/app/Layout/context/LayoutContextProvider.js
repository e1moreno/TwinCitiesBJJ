import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const LayoutContext = React.createContext();

class LayoutContextProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    open: false,
  };

  setOpen = (open) => {
    this.setState({
      open,
    });
  };

  render() {
    const { children } = this.props;

    return (
      <LayoutContext.Provider value={{ ...this.state, setOpen: this.setOpen }}>
        {children}
      </LayoutContext.Provider>
    );
  }
}

export default LayoutContextProvider;
