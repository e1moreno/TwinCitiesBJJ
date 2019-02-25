import styled from 'styled-components';
import pattern from 'images/smallpattern.svg';

export const NavBarContainer = styled.div`
  display: flex;
  height: var(--navBarHeight);
  width: 100%;
  align-items: center;
  justify-content: space-between;
  top: 8px;
  background-color: #28519f;
  background-image: url(${pattern});
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.8), 0 0 14px rgba(0, 0, 0, 0.7),
    0 0 24px rgba(0, 0, 0, 0.5);
`;

export const HeaderLogo = styled.h1`
  padding-left: 24px;
  z-index: 1;
`;
