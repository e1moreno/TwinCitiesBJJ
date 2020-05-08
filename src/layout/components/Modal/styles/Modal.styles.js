import styled from 'styled-components';
import BaseOverlay from 'lib/Overlay/Overlay';

import { Close as BaseCloseIcon } from 'styled-icons/material';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  color: var(--black);
  background-color: var(--white);

  display: grid;
  grid-template-columns: 1rem 1fr 48px 1rem;
  grid-template-rows: 1rem 48px 1fr 1rem;
  grid-template-areas:
    ' . . . .'
    '. header closeIcon .'
    '. content content .'
    ' . . . .';

  width: ${({ mobile }) => mobile && '100%'};
  height: ${({ mobile }) => mobile && '100%'};
  min-width: 400px;
  min-height: 300px;
`;

export const Content = styled.div`
  grid-area: content;
  width: 100%;
  height: 100%;
`;

export const CloseIcon = styled(BaseCloseIcon)`
  grid-area: closeIcon;
  cursor: pointer;
`;

export const Overlay = styled(BaseOverlay)``;
