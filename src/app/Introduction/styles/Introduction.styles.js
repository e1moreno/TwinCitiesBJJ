import styled from 'styled-components';

import ContentHeader from 'design/ContentHeader/ContentHeader';
import { SMALL_VIEW } from 'utils/constants';

export const IntroHeader = styled(ContentHeader)`
  display: block;
  padding-top: 8px;
  font-size: 2.4rem;

  @media (max-width: ${SMALL_VIEW}px) {
    font-size: 1.2rem;
  }
  &::before {
    background-color: var(--black);
  }

  &::after {
    background-color: var(--red);
  }
`;

export const IntroSubheader = styled.h3`
  margin: 1rem 0 0 0;
  text-align: center;
  color: var(--offWhite);
`;

export const IntroContent = styled.div``;
