import { Component } from 'react';
import PropTypes from 'prop-types';

class WindowSize extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  state = {
    width: 0,
    height: 0,
  };

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions);
  };

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  render = () => {
    const { children } = this.props;
    const { width: windowWidth, height: windowHeight } = this.state;

    return children({ windowWidth, windowHeight });
  };
}

export default WindowSize;
