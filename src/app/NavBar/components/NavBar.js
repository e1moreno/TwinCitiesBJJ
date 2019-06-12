import React from 'react';

import NavigationContainer from '../containers/NavigationContainer';
import NavMobileMenuContainer from '../containers/NavMobileMenuContainer';

import { NavBarContainer } from '../styles/NavBar.styles';

const NavBar = () => (
  <NavBarContainer>
    <NavigationContainer />
    <NavMobileMenuContainer />
  </NavBarContainer>
);

export default NavBar;
