import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../styles/InviteButton.styles';

const InviteButton = ({ onClick }) => (
  <Button aria-label="Join Now" onClick={onClick}>
    Try a free class today!
  </Button>
);
InviteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default InviteButton;
