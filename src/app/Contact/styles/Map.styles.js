import styled from 'styled-components';

import { LocationOn as StyledLocationOn } from 'styled-icons/material';

export const MapWrapper = styled.div`
  width: 100%;
  height: 350px;
`;

export const LocationOn = styled(StyledLocationOn)`
  height: 48px;
  color: var(--red);
  transform: translate(-50%, -100%);

  &:hover {
    cursor: pointer;
  }
`;
