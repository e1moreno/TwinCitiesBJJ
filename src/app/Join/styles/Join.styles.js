import styled from 'styled-components';

import { PageSection as BasePageSection } from 'design/PageSection';
import ContentHeader from 'design/ContentHeader/ContentHeader';

export const PageSection = styled(BasePageSection)`
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23fbfbfb' fill-opacity='0.89'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
`;

export const JoinHeader = styled(ContentHeader)`
  margin: 32px 0 8px 0;
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
