import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { links } from 'app/NavBar/components/Navigation';
import MobileNavLinkContainer from '../containers/MobileNavLinkContainer';
import {
  SlideMenu,
  Overlay,
  NavigationWrapper,
} from '../styles/MobileNav.styles';

const NavLinks = ({ open }) => links.map(({ to, title }) => (
  <MobileNavLinkContainer key={to} to={to} tabIndex={open ? 0 : -1}>
    {title}
  </MobileNavLinkContainer>
));
NavLinks.propTypes = {
  open: PropTypes.bool.isRequired,
};

const MobileNav = ({
  open, initialized, onClickClose, onKeyDownClose,
}) => (
  <Fragment>
    <SlideMenu
      open={open}
      initialized={initialized}
      id="mobile-menu"
      aria-expanded={open}
    >
      <NavigationWrapper>
        <NavLinks open={open} />
      </NavigationWrapper>
    </SlideMenu>
    <Overlay
      visible={open}
      onClick={open ? onClickClose : undefined}
      onKeyDown={onKeyDownClose}
      tabIndex={open ? 0 : -1}
    />
  </Fragment>
);

MobileNav.propTypes = {
  open: PropTypes.bool,
  initialized: PropTypes.bool,
  onClickClose: PropTypes.func.isRequired,
  onKeyDownClose: PropTypes.func.isRequired,
};
MobileNav.defaultProps = {
  open: false,
  initialized: false,
};

export default MobileNav;
