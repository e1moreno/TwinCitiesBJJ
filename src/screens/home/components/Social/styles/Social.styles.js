import styled from 'styled-components';
import { RoundIconWrapper } from 'lib/Icon/styles/Icon.styles';

import { PageSectionContainer as BasePageSection } from 'lib/PageSection';
import ContentHeader from 'lib/ContentHeader/ContentHeader';
import { Icon as BaseIcon } from 'lib/Icon';

export const PageSection = styled(BasePageSection)`
  padding-top: 60px;
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

export const Icon = styled(BaseIcon)`
  height: 64px;
  width: 64px;
  margin: 0 16px;

  & .symbol-icon {
    height: 48px;
  }

  ${RoundIconWrapper} {
    border: solid 5px;
  }
`;

export const FbIcon = styled(Icon)`
  color: var(--offWhite);
`;

export const InstaIcon = styled(Icon)`
  color: var(--offWhite);
`;
