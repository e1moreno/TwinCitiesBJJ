import styled from 'styled-components';
import pattern from 'images/smallpattern.svg';

export const NavBarContainer = styled.div`
  display: flex;
  height: var(--navBarHeight);
  width: 100%;
  align-items: center;
  justify-content: space-between;
  top: 8px;
  background-color: #1e3c76;
  background-image: url(${pattern});
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px -1px 8px rgba(0, 0, 0, 0.15);
`;

export const HeaderLogo = styled.h1`
  padding-left: 24px;
  z-index: 1;
`;
