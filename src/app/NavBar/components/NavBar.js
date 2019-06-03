import React from 'react';

import TCBJJLogo from 'images/TCBJJLogo';
import NavigationContainer from '../containers/NavigationContainer';
import NavMobileMenuContainer from '../containers/NavMobileMenuContainer';

import {
  NavBarContainer,
  HeaderLogo,
  HeaderLink,
} from '../styles/NavBar.styles';

const NavBar = () => (
  <NavBarContainer>
    <HeaderLogo>
      <HeaderLink to="/" aria-label="Home">
        <TCBJJLogo />
      </HeaderLink>
    </HeaderLogo>
    <NavigationContainer />
    <NavMobileMenuContainer />
  </NavBarContainer>
);

export default NavBar;
