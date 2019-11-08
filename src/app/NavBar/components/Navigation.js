import React from 'react';
import PropTypes from 'prop-types';

import { FeatureToggle } from 'app/FeatureToggle';
import featureKey from 'utils/featureKey';
import { NavigationDropdownContainer } from 'app/NavigationDropdown';
import { NavigationWrapper, NavigationLink } from '../styles/Navigation.styles';

const Navigation = ({ courseDropdownData }) => (
  <NavigationWrapper>
    <NavigationLink to="/">Home</NavigationLink>
    <FeatureToggle feature={featureKey.about}>
      <NavigationLink to="/about">About</NavigationLink>
    </FeatureToggle>
    <FeatureToggle feature={featureKey.curriculum}>
      <NavigationDropdownContainer data={courseDropdownData} text="Curriculum" />
    </FeatureToggle>
    <FeatureToggle feature={featureKey.schedule}>
      <NavigationLink to="/schedule">Schedule</NavigationLink>
    </FeatureToggle>
    <FeatureToggle feature={featureKey.contact}>
      <NavigationLink to="/contact">Contact</NavigationLink>
    </FeatureToggle>
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
