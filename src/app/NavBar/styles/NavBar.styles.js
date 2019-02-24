import styled from 'styled-components';

export const NavBarContainer = styled.div`
  position: absolute;
  display: flex;
  height: var(--navBarHeight);
  width: 100%;
  align-items: center;
  justify-content: space-between;
  top: 8px;
`;

export const HeaderLogo = styled.h1`
  padding-left: 24px;
  z-index: 1;
`;
