import styled from 'styled-components';
import BaseOverlay from 'design/Overlay/Overlay';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  color: var(--black);
  background-color: var(--white);
  padding: 1rem;

  width: ${({ mobile }) => mobile && '100%'};
  height: ${({ mobile }) => mobile && '100%'};
`;

export const Overlay = styled(BaseOverlay)``;
