import styled from 'styled-components';

import ContentHeader from 'design/ContentHeader/ContentHeader';

export const IntroWrapper = styled.div`
  padding: 1rem 0;
  color: var(--white);
`;

export const IntroHeader = styled(ContentHeader)`
  &::before {
    background-color: var(--black);
  }

  &::after {
    background-color: var(--red);
  }
`;

export const IntroContent = styled.div``;
