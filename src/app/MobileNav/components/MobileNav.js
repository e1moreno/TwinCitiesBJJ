import React from 'react';
import PropTypes from 'prop-types';

import MobileNavLinkContainer from '../containers/MobileNavLinkContainer';
import MobileCollapsibleNavContainer from '../containers/MobileCollapsibleNavContainer';
import NavigationWrapper from './NavigationWrapper';

import { SlideMenu, Overlay } from '../styles/MobileNav.styles';

export const links = [
  { to: '/', title: 'Home' },
  { to: '/about', title: 'About' },
  { to: '/schedule', title: 'Schedule' },
  { to: '/contact', title: 'Contact' },
];

const MobileNav = React.memo(
  ({
    open, initialized, collapseData, onClickClose, onKeyDownClose,
  }) => (
    <>
      <SlideMenu
        open={open}
        initialized={initialized}
        id="mobile-menu"
        aria-expanded={open}
      >
        <NavigationWrapper open={open}>
          <MobileNavLinkContainer to="/">Home</MobileNavLinkContainer>
          <MobileNavLinkContainer to="/about">About</MobileNavLinkContainer>
          <MobileCollapsibleNavContainer text="Curriculum">
            {collapseData.map(({ text, slug }) => (
              <MobileNavLinkContainer key={slug} to={slug}>
                {text}
              </MobileNavLinkContainer>
            ))}
          </MobileCollapsibleNavContainer>
          <MobileNavLinkContainer to="/schedule">
            Schedule
          </MobileNavLinkContainer>
          <MobileNavLinkContainer to="/contact">Contact</MobileNavLinkContainer>
        </NavigationWrapper>
      </SlideMenu>
      <Overlay
        visible={open}
        onClick={open ? onClickClose : undefined}
        onKeyDown={onKeyDownClose}
        tabIndex={open ? 0 : -1}
      />
    </>
  ),
);

MobileNav.propTypes = {
  open: PropTypes.bool,
  initialized: PropTypes.bool,
  collapseData: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClickClose: PropTypes.func.isRequired,
  onKeyDownClose: PropTypes.func.isRequired,
};
MobileNav.defaultProps = {
  open: false,
  initialized: false,
};

export default MobileNav;
