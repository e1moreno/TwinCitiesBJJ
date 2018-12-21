import styled from 'styled-components';

import ContentHeader from 'design/ContentHeader/ContentHeader';

export const JoinHeader = styled(ContentHeader)`
  margin: 32px 0 8px 0;
  color: var(--black);

  &::before {
    background-color: var(--blue);
  }
`;

export const JoinSubheader = styled.h3`
  margin: 8px 0 16px 0;
  color: var(--gray);
  text-align: center;
`;

export const IntroContent = styled.div``;
