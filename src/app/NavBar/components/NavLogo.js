import React from 'react';
import { WindowSize } from 'design/WindowSize';

import { SMALL_VIEW } from 'utils/constants';
import TCTraingle from 'images/TCTriangle';
import { NavBarLogo, LogoLink, LogoGraphic } from '../styles/NavLogo.styles';

const NavLogo = () => (
  <NavBarLogo>
    <LogoLink href="/">
      Twin Cities
      <LogoGraphic>
        <WindowSize>
          {({ windowWidth }) => (
            <TCTraingle
              height={windowWidth > SMALL_VIEW ? '18px' : '12px'}
              color="var(--white)"
            />
          )}
        </WindowSize>
      </LogoGraphic>
      Brazilian Jiu Jitsu
    </LogoLink>
  </NavBarLogo>
);

export default NavLogo;
