import React from 'react';

import { NavBarContainer } from '../styles/NavBar.styles';
import NavMobileMenu from './NavMobileMenu';
import NavLogo from './NavLogo';

const NavBar = () => (
  <NavBarContainer>
    <NavLogo />
    <NavMobileMenu />
  </NavBarContainer>
);

export default NavBar;
