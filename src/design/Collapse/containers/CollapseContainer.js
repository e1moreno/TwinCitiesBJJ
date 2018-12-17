import React, { Component } from 'react';
import PropTypes from 'prop-types';

import onKeyHelper from 'utils/onKeyHelper';

import Collapse from '../components/Collapse';

class CollapseContainer extends Component {
  static propTypes = {
    wrapperElement: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    wrapperElement: null,
  };

  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleKeyDown = (e) => {
    onKeyHelper(e, this.handleClick);
  };

  render() {
    const { wrapperElement, children } = this.props;
    const { open } = this.state;
    return (
      <Collapse
        open={open}
        wrapperElement={wrapperElement}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
      >
        {children}
      </Collapse>
    );
  }
}

export default CollapseContainer;
