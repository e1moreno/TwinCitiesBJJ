import React from 'react';

import { NavigationWrapper, NavigationLink } from '../styles/Navigation.styles';

export const links = [
  { to: '/', title: 'Home' },
  { to: '/about', title: 'About' },
  { to: '/schedule', title: 'Schedule' },
  { to: '/contact', title: 'Contact' },
];

const Navigation = () => (
  <NavigationWrapper>
    {links.map(({ to, title }) => (
      <NavigationLink to={to}>{title}</NavigationLink>
    ))}
  </NavigationWrapper>
);

export default Navigation;
