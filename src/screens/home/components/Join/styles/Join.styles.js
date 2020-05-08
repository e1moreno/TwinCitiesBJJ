import styled from 'styled-components';

import { PageSectionContainer as BasePageSection } from 'lib/PageSection';
import ContentHeader from 'lib/ContentHeader/ContentHeader';

export const PageSection = styled(BasePageSection)`
  padding-top: 40px;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 108%;
    top: 0;
    z-index: -1;
    transform: skewY(-6deg);
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23fbfbfb' fill-opacity='0.89'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2), 0px -1px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const JoinHeader = styled(ContentHeader)`
  color: var(--black);
  font-size: 2.4rem;

  &::before {
    background-color: var(--brown);
  }
`;

export const JoinSubheader = styled.h3`
  margin: 8px 0 16px 0;
  color: var(--gray);
  text-align: center;
`;

export const IntroContent = styled.div``;
