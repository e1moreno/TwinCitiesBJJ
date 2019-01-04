import styled from 'styled-components';

export const NavBarContainer = styled.div`
  position: absolute;
  display: flex;
  height: var(--navBarHeight);
  width: 100%;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  top: 16px;
`;

export const HeaderLogo = styled.h1`
  padding-left: 24px;
`;
