import styled from 'styled-components';
import { Instagram } from 'styled-icons/fa-brands';

export const Link = styled.a`
  margin: 0 8px;
`;

export const Icon = styled(Instagram)`
  &:hover {
    color: var(--instaPurp);
  }
`;
