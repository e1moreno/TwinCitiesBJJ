import React from 'react';
import { Link } from 'gatsby';

import TCBJJLogo from 'images/TCBJJLogo';
import Navigation from './Navigation';
import NavMobileMenu from './NavMobileMenu';

import { NavBarContainer, HeaderLogo } from '../styles/NavBar.styles';

const NavBar = () => (
  <NavBarContainer>
    <HeaderLogo>
      <Link to="/" style={{ display: 'flex' }} aria-label="Home">
        <TCBJJLogo height="80px" />
      </Link>
    </HeaderLogo>
    <Navigation />
    <NavMobileMenu />
  </NavBarContainer>
);

export default NavBar;
