import React from 'react';
import { Link } from 'gatsby';

import { LongLogo } from 'app/LongLogo';
import NavMobileMenu from './NavMobileMenu';

import { NavBarContainer } from '../styles/NavBar.styles';

const NavBar = () => (
  <NavBarContainer>
    <Link to="/">
      <LongLogo />
    </Link>
    <NavMobileMenu />
  </NavBarContainer>
);

export default NavBar;
