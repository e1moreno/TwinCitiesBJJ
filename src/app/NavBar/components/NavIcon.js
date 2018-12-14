import React from 'react';
import { Menu as MenuIcon } from 'styled-icons/material';

import { Icon } from 'design/Icon';
import { MobileNavToggle } from '../styles/NavIcon.styles';

const NavIcon = () => (
  <MobileNavToggle>
    <Icon
      Symbol={MenuIcon}
      color="var(--white)"
      IconStyles={{
        width: '32px',
        height: '32px',
      }}
    />
  </MobileNavToggle>
);

export default NavIcon;
