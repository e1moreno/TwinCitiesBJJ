import React from 'react';
import { Link } from 'gatsby';

import TCBJJLogo from 'images/TCBJJLogo';
import NavMobileMenu from './NavMobileMenu';

import { NavBarContainer } from '../styles/NavBar.styles';

const NavBar = () => (
  <NavBarContainer>
    <h1>
      <Link to="/" style={{ display: 'flex' }} aria-label="Home">
        <TCBJJLogo height="70px" />
      </Link>
    </h1>
    <NavMobileMenu />
  </NavBarContainer>
);

export default NavBar;
