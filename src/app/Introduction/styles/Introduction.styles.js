import styled from 'styled-components';

import ContentHeader from 'design/ContentHeader/ContentHeader';

export const IntroHeader = styled(ContentHeader)`
  display: block;
  padding-top: 8px;
  font-size: ${({ mobile }) => (mobile ? '1.2rem' : '2.4rem')};

  &::before {
    background-color: var(--black);
  }

  &::after {
    background-color: var(--red);
  }
`;

export const IntroSubheader = styled.h3`
  margin: 1rem 0 0 0;
  text-align: center;
  color: var(--off-white);
`;

export const IntroContent = styled.div``;
