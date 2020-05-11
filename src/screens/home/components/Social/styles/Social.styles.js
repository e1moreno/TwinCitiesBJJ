import styled from 'styled-components';

import { PageSectionContainer as BasePageSection } from 'lib/PageSection';
import ContentHeader from 'lib/ContentHeader/ContentHeader';

export const PageSection = styled(BasePageSection)`
  padding-top: 1rem;
`;

export const SocialHeader = styled(ContentHeader)`
  display: block;
  font-size: 2.4rem;

  &::before {
    background-color: var(--backgroundPurple);
  }
`;

export const SocialWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
