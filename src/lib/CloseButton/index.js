import React from 'react';
import styled from 'styled-components';
import BaseButton from 'lib/Button/Button';

import { Close as BaseCloseIcon } from 'styled-icons/material';

export const Button = styled(BaseButton)`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  min-height: 48px;
  min-width: 48px;

  color: inherit;
  cursor: pointer;
`;

export const CloseIcon = styled(BaseCloseIcon)`
  height: 32px;
  width: 32px;
`;

const CloseButton = (props) => (
  <Button {...props}>
    <CloseIcon />
  </Button>
);

export default CloseButton;
