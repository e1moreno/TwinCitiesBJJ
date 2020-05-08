import styled from 'styled-components';
import { FacebookF, Instagram } from 'styled-icons/fa-brands';

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: social;
`;

export const SocialLink = styled.a`
  margin: 0 8px;
`;

export const FacebookIcon = styled(FacebookF)`
  &:hover {
    color: var(--fbBlue);
  }
`;

export const InstagramIcon = styled(Instagram)`
  &:hover {
    color: var(--instaPurp);
  }
`;
