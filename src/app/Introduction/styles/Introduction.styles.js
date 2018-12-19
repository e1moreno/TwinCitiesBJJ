import styled from 'styled-components';

import ContentHeader from 'design/ContentHeader/ContentHeader';

export const IntroHeader = styled(ContentHeader)`
  &::before {
    background-color: var(--black);
  }

  &::after {
    background-color: var(--red);
  }
`;

export const IntroContent = styled.div``;
