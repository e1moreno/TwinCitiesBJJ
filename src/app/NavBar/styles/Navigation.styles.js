import styled from 'styled-components';
import { SMALL_VIEW } from 'utils/constants';
import { Link } from 'gatsby';

export const NavigationWrapper = styled.nav`
  display: flex;
  padding-right: 24px;
  z-index: 1;

  @media (max-width: ${SMALL_VIEW}px) {
    display: none;
  }
`;

export const NavigationLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  color: var(--off-white);
  text-transform: uppercase;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 2px;

  &:hover {
    color: #ffffff;
  }
`;
