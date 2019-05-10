import React from 'react';
import PropTypes from 'prop-types';

import { NavigationDropdownContainer } from 'app/NavigationDropdown';
import { NavigationWrapper, NavigationLink } from '../styles/Navigation.styles';

const Navigation = ({ courseDropdownData }) => (
  <NavigationWrapper>
    <NavigationLink to="/">Home</NavigationLink>
    <NavigationLink to="/about">About</NavigationLink>
    <NavigationDropdownContainer data={courseDropdownData} text="Curriculum" />
    <NavigationLink to="/schedule">Schedule</NavigationLink>
    <NavigationLink to="/contact">Contact</NavigationLink>
  </NavigationWrapper>
);
Navigation.propTypes = {
  courseDropdownData: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Navigation;
