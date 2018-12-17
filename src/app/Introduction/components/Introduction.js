import React from 'react';
import TCBJJLogo from 'images/TCBJJLogo';

import { WindowSize } from 'design/WindowSize';
import { SMALL_VIEW } from 'utils/constants';
import { IntroWrapper } from '../styles/Introduction.styles';

const Introduction = () => (
  <IntroWrapper>
    <WindowSize>
      {({ windowWidth }) => (
        <TCBJJLogo height={windowWidth > SMALL_VIEW ? '190px' : '140px'} />
      )}
    </WindowSize>
  </IntroWrapper>
);

export default Introduction;
