import React from 'react';
import { useWindowSize } from 'design/WindowSize';

import { SMALL_VIEW } from 'utils/constants';
import TCTraingle from 'images/TCTriangle';
import {
  NavBarLogo,
  LogoGraphic,
  LogoTextWrapper,
  LogoTextSection,
} from '../styles/LongLogo.styles';

const LongLogo = (props) => {
  const { width: windowWidth } = useWindowSize();
  return (
    <NavBarLogo {...props}>
      <LogoGraphic>
        <TCTraingle
          height={windowWidth > SMALL_VIEW ? '18px' : '12px'}
          color="var(--white)"
        />
      </LogoGraphic>
      <LogoTextWrapper>
        <LogoTextSection>Twin Cities</LogoTextSection>
        &nbsp;
        <LogoTextSection>Brazilian Jiu Jitsu</LogoTextSection>
      </LogoTextWrapper>
    </NavBarLogo>
  );
};

export default LongLogo;
