import React from 'react';

import { LongLogo } from 'app/LongLogo';
import NavMobileMenu from './NavMobileMenu';

import { NavBarContainer } from '../styles/NavBar.styles';

const NavBar = () => (
  <NavBarContainer>
    <LongLogo />
    <NavMobileMenu />
  </NavBarContainer>
);

export default NavBar;
