import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { links } from 'app/NavBar/components/Navigation';
import MobileNavLinkContainer from '../containers/MobileNavLinkContainer';
import {
  SlideMenu,
  Overlay,
  NavigationWrapper,
} from '../styles/MobileNav.styles';

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
        {links.map(({ to, title }) => (
          <MobileNavLinkContainer key={to} to={to}>
            {title}
          </MobileNavLinkContainer>
        ))}
      </NavigationWrapper>
    </SlideMenu>
    <Overlay
      visible={open}
      onClick={open ? onClickClose : undefined}
      onKeyDown={onKeyDownClose}
      tabIndex="0"
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
