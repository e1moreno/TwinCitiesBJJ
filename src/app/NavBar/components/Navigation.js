import React from 'react';

import { NavigationWrapper, NavigationLink } from '../styles/Navigation.styles';

const Navigation = () => (
  <NavigationWrapper>
    <NavigationLink to="/">Home</NavigationLink>
    <NavigationLink to="/about">About</NavigationLink>
    <NavigationLink to="/schedule">Schedule</NavigationLink>
    <NavigationLink to="/contact">Contact</NavigationLink>
  </NavigationWrapper>
);

export default Navigation;
