import styled from 'styled-components';

import { PageSection as BasePageSection } from 'design/PageSection';
import ContentHeader from 'design/ContentHeader/ContentHeader';
import { Icon as BaseIcon } from 'design/Icon';

export const PageSection = styled(BasePageSection)`
  background: linear-gradient(
    to right,
    var(--backgroundPurple) 0%,
    var(--backPurpleAlt) 100%
  );
`;

export const SocialHeader = styled(ContentHeader)`
  display: block;
  margin: 32px 0 8px 0;
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
  border: solid 5px;
  margin: 0 16px;

  & .symbol-icon {
    height: 48px;
  }
`;

export const FbIcon = styled(Icon)`
  color: var(--fbBlue);
`;

export const InstaIcon = styled(Icon)`
  color: var(--instaPurp);
`;
