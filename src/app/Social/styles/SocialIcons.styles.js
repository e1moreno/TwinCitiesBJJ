import styled from 'styled-components';
import { Link } from 'gatsby';
import { FacebookF, Instagram } from 'styled-icons/fa-brands';

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: social;
`;

export const SocialLink = styled(Link)`
  margin: 0 8px;
`;

export const FacebookIcon = styled(FacebookF)`
  &:hover {
    color: #3b5998;
  }
`;

export const InstagramIcon = styled(Instagram)`
  &:hover {
    color: #c32aa3;
  }
`;
