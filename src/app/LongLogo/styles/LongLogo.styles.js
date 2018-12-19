import styled from 'styled-components';

export const NavBarLogo = styled.h1`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  height: 100%;
  align-items: center;
  margin: 0;
  color: var(--white);
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const LogoGraphic = styled.span`
  padding: 0 0.56rem;
`;
