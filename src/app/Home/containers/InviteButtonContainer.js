import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import InviteButton from '../components/InviteButton';

class InviteButtonContainer extends PureComponent {
  static propTypes = {
    joinRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]).isRequired,
  };

  handleClick = () => {
    const {
      joinRef: {
        current: { offsetTop },
      },
    } = this.props;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  };

  render() {
    return <InviteButton onClick={this.handleClick} />;
  }
}

export default InviteButtonContainer;
