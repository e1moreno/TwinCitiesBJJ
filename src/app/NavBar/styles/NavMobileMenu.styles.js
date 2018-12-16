import styled from 'styled-components';

export const MobileNavToggle = styled.div`
  grid-area: navigation;
  display: flex;
  justify-content: flex-end;

  @media (min-width: 1024px) {
    display: none;
  }
`;
