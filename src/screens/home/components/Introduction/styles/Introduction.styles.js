import styled from 'styled-components';

import ContentHeader from 'lib/ContentHeader/ContentHeader';
import { PageSectionContainer as BasePageSection } from 'lib/PageSection';
import { SMALL_VIEW } from 'utils/constants';

export const PageSection = styled(BasePageSection)`
  color: var(--white);
`;

export const IntroHeader = styled(ContentHeader)`
  display: block;
  padding-top: 8px;
  font-size: 2.4rem;

  @media (max-width: ${SMALL_VIEW}px) {
    font-size: 1.2rem;
  }
  &::before {
    background-color: var(--pureBlack);
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

export const IframeContainer = styled.span`
  padding-bottom: 56.25%;
  position: relative;
  display: block;
  width: 100%;

  > iframe {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
