import styled from 'styled-components';
import { Link } from 'gatsby';

export const NavigationLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 48px;
  color: var(--off-white);

  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;

  &:hover,
  &:active {
  }
`;
