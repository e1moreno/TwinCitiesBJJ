import styled from 'styled-components';
import { SMALL_VIEW } from 'utils/constants';
import { Link } from 'gatsby';

export const NavigationWrapper = styled.nav`
  display: flex;
  padding-right: 24px;
  z-index: 1;

  @media (max-width: ${SMALL_VIEW - 1}px) {
    display: none;
  }
`;

export const NavigationLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 48px;
  padding: 0 1rem;
  color: var(--offWhite);
  text-transform: uppercase;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 2px;

  &:hover {
    color: #ffffff;
  }
`;
