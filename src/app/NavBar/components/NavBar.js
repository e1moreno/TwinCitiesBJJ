import React from 'react';
import { Link } from 'gatsby';

import TCBJJLogo from 'images/TCBJJLogo';
import NavMobileMenu from './NavMobileMenu';

import { NavBarContainer } from '../styles/NavBar.styles';

const NavBar = () => (
  <NavBarContainer>
    <Link to="/" style={{ display: 'flex' }}>
      <TCBJJLogo height="70px" />
    </Link>
    <NavMobileMenu />
  </NavBarContainer>
);

export default NavBar;
