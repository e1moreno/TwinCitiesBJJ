import styled from 'styled-components';

import { RoundIconWrapper } from 'lib/Icon/styles/Icon.styles';
import { Icon as BaseIcon } from 'lib/Icon';

export const Icon = styled(BaseIcon)`
  height: 64px;
  width: 64px;
  margin: 0 16px;
  color: var(--offWhite);

  & .symbol-icon {
    height: 48px;
  }

  ${RoundIconWrapper} {
    border: solid 5px;
  }
`;
