import React from 'react';
import { Link } from 'gatsby';

import TCBJJLogo from 'images/TCBJJLogo';
import Navigation from './Navigation';
import NavMobileMenuContainer from '../containers/NavMobileMenuContainer';

import { NavBarContainer, HeaderLogo } from '../styles/NavBar.styles';

const NavBar = () => (
  <NavBarContainer>
    <HeaderLogo>
      <Link to="/" style={{ display: 'flex' }} aria-label="Home">
        <TCBJJLogo height="80px" />
      </Link>
    </HeaderLogo>
    <Navigation />
    <NavMobileMenuContainer />
  </NavBarContainer>
);

export default NavBar;
