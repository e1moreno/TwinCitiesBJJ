import styled from 'styled-components';
import { Dialog as ReachDialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

import BaseButton from 'lib/Button/Button';

import { Close as BaseCloseIcon } from 'styled-icons/material';

export const Dialog = styled(ReachDialog).withConfig({
  shouldForwardProp: (prop) => prop !== 'mobile',
})`
  color: var(--black);
  background-color: var(--white);

  position: relative;

  width: ${({ mobile }) => mobile && 'calc(100% - 4rem)'};
  height: ${({ mobile }) => mobile && 'calc(100% - 4rem)'};
  margin: ${({ mobile }) => mobile && '0'};
`;

export const Content = styled.div``;

export const Button = styled(BaseButton)`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  min-height: 48px;
  min-width: 48px;

  cursor: pointer;
`;

export const CloseIcon = styled(BaseCloseIcon)`
  height: 32px;
  width: 32px;
`;
