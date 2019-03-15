import styled from 'styled-components';
import FilledButton from 'design/Button/FilledButton';
import { SMALL_VIEW } from 'utils/constants';

export const Button = styled(FilledButton)`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);

  font-size: 1.4rem;

  @media (max-width: ${SMALL_VIEW}px) {
    font-size: 1.2rem;
  }
`;
