import styled from 'styled-components';
import Button from 'design/Button/Button';
import { SMALL_VIEW } from 'utils/constants';

export const MobileNavToggle = styled(Button)`
  grid-area: navigation;
  display: flex;
  justify-content: flex-end;
  padding-right: 24px;

  @media (min-width: ${SMALL_VIEW}px) {
    display: none;
  }
`;
