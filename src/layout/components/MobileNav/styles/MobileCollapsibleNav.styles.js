import styled from 'styled-components';

import {
  ExpandLess as StyledExpandLess,
  ExpandMore as StyledExpandMore,
} from 'styled-icons/material';

export const ControlButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  outline: none;

  min-height: 48px;
  color: ${({ open }) => (open ? '#FFFFFF' : ' var(--offWhite)')};

  font-family: 'Source Sans Pro', 'sans-serif';
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;

  cursor: pointer;

  &:hover,
  &:active {
    color: #ffffff;
  }
`;

export const CollapseWrapper = styled.div`
  max-height: ${({ open }) => !open && 0};
  overflow: ${({ open }) => !open && 'hidden'};
  opacity: ${({ open }) => (!open ? 0 : '1 !important')};
  transition: opacity 0.5s ease-out;
`;

export const ExpandLess = styled(StyledExpandLess)`
  width: 2rem;
`;

export const ExpandMore = styled(StyledExpandMore)`
  width: 2rem;
`;
