import React from 'react';
import { WindowSize } from 'design/WindowSize';

import TCTraingle from 'images/TCTriangle';
import NavIcon from './NavIcon';
import {
  NavBarContainer,
  NavBarLogo,
  LogoLink,
  LogoGraphic,
} from '../styles/NavBar.styles';

const NavBar = () => (
  <NavBarContainer>
    <NavBarLogo>
      <LogoLink href="/">
        Twin Cities
        <LogoGraphic>
          <WindowSize>
            {({ windowWidth }) => (
              <TCTraingle
                height={windowWidth > 600 ? '18px' : '12px'}
                color="var(--white)"
              />
            )}
          </WindowSize>
        </LogoGraphic>
        Brazilian Jiu Jitsu
      </LogoLink>
    </NavBarLogo>
    <NavIcon />
  </NavBarContainer>
);

export default NavBar;
