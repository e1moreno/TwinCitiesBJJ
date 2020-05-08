import styled from 'styled-components';
import { NavigationLink as BaseNavigationLink } from 'layout/components/NavBar/styles/Navigation.styles';
import {
  ExpandLess as StyledExpandLess,
  ExpandMore as StyledExpandMore,
} from 'styled-icons/material';

export const PopoverButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  padding: 0 1rem;
  color: ${({ ariaExpanded }) =>
    ariaExpanded ? '#FFFFFF' : ' var(--offWhite)'};
  text-transform: uppercase;
  font-family: 'Source Sans Pro', 'sans-serif';
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`;

export const LinkList = styled.ul`
  list-style-type: none;
  text-align: center;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
`;

export const NavigationLink = styled(BaseNavigationLink)`
  width: 100%;
  justify-content: center;
  letter-spacing: 1px;
  color: var(--textGray);

  &:hover {
    color: var(--menuGray);
  }
`;

export const ExpandLess = styled(StyledExpandLess)`
  width: 1.7rem;
`;

export const ExpandMore = styled(StyledExpandMore)`
  width: 1.7rem;
`;
