import React from 'react';
import PropTypes from 'prop-types';

import {
  MobileNavToggle,
  MobileNavIconWrapper,
  MobileNavIcon,
} from '../styles/NavMobileMenu.styles';

const NavIcon = ({ open }) => (
  <MobileNavIconWrapper open={open}>
    <MobileNavIcon open={open} />
  </MobileNavIconWrapper>
);
NavIcon.propTypes = {
  open: PropTypes.bool.isRequired,
};

const NavMobileMenu = ({ open, onClick }) => (
  <MobileNavToggle onClick={onClick} id="nav-icon" aria-expanded={open}>
    <NavIcon open={open} />
  </MobileNavToggle>
);
NavMobileMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavMobileMenu;
