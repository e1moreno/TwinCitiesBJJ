import React from 'react';
import { WindowSize } from 'design/WindowSize';

import { SMALL_VIEW } from 'utils/constants';
import TCTraingle from 'images/TCTriangle';
import { NavBarLogo, LogoGraphic } from '../styles/LongLogo.styles';

const LongLogo = () => (
  <NavBarLogo>
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
    Twin Cities Brazilian Jiu Jitsu
  </NavBarLogo>
);

export default LongLogo;
