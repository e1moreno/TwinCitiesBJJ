import styled from 'styled-components';
import pattern from 'images/smallpattern.svg';

export const NavBarContainer = styled.nav`
  display: flex;
  padding: 8px 16px;
  width: 100%;
  height: var(--navBarHeight);
  align-items: center;
  justify-content: space-between;
  background-color: #28519f;
  background-image: url(${pattern});
  z-index: 100;
`;
