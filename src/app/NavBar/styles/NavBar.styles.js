import styled from 'styled-components';
import pattern from 'images/smallpattern.svg';

export const NavBarContainer = styled.nav`
  display: flex;
  padding: 8px 16px;
  width: 100%;
  height: 72px;
  align-items: center;
  justify-content: space-between;
  background-color: #28519f;
  background-image: url(${pattern});
  z-index: 100;
`;

export const NavBarLogo = styled.h1`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  height: 100%;
  align-items: center;
  margin: 0;
  color: var(--white);
  text-transform: uppercase;
  font-size: 24px;
  line-height: 24px;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const LogoLink = styled.a`
  text-decoration: none;
  text-shadow: unset;
  background-image: unset;
`;

export const LogoGraphic = styled.span`
  padding: 0 1rem;
`;
