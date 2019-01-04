import React from 'react';
import { WindowSize } from 'design/WindowSize';

import { SMALL_VIEW } from 'utils/constants';
import TCTraingle from 'images/TCTriangle';
import {
  NavBarLogo,
  LogoGraphic,
  LogoTextWrapper,
  LogoTextSection,
} from '../styles/LongLogo.styles';

const LongLogo = props => (
  <NavBarLogo {...props}>
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
    <LogoTextWrapper>
      <LogoTextSection>Twin Cities</LogoTextSection>
      &nbsp;
      <LogoTextSection>Brazilian Jiu Jitsu</LogoTextSection>
    </LogoTextWrapper>
  </NavBarLogo>
);

export default LongLogo;
