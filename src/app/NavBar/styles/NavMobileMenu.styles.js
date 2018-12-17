import styled from 'styled-components';
import Button from 'design/Button/Button';

export const MobileNavToggle = styled(Button)`
  grid-area: navigation;
  display: flex;
  justify-content: flex-end;

  @media (min-width: 1024px) {
    display: none;
  }
`;
