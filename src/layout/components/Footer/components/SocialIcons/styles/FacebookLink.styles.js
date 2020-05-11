import styled from 'styled-components';
import { FacebookF } from 'styled-icons/fa-brands';

export const Link = styled.a`
  margin: 0 8px;
`;

export const Icon = styled(FacebookF)`
  &:hover {
    color: var(--fbBlue);
  }
`;
