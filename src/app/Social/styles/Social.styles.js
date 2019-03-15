import styled from 'styled-components';
import { RoundIconWrapper } from 'design/Icon/styles/Icon.styles';

import { PageSectionContainer as BasePageSection } from 'design/PageSection';
import ContentHeader from 'design/ContentHeader/ContentHeader';
import { Icon as BaseIcon } from 'design/Icon';

export const PageSection = styled(BasePageSection)`
  background-color: var(--backgroundPurple);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23581d65' fill-opacity='0.505'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
`;

export const SocialHeader = styled(ContentHeader)`
  display: block;
  font-size: 2.4rem;

  &::before {
    background-color: var(--blue);
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
  color: var(--fbBlue);
`;

export const InstaIcon = styled(Icon)`
  color: var(--instaPurp);
`;
