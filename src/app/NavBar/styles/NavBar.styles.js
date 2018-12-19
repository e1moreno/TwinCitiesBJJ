import styled from 'styled-components';
import pattern from 'images/smallpattern.svg';

export const NavBarContainer = styled.nav`
  display: flex;
  padding: 0 16px;
  height: var(--navBarHeight);
  align-items: center;
  justify-content: space-between;
  background-color: #28519f;
  background-image: url(${pattern});
  z-index: 100;
`;
