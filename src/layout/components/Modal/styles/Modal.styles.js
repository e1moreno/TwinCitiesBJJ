import styled from 'styled-components';
import { Dialog as ReachDialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

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
