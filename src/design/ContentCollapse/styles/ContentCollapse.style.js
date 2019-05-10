import styled from 'styled-components';
import Button from 'design/Button/Button';
import {
  ExpandLess as StyledExpandLess,
  ExpandMore as StyledExpandMore,
} from 'styled-icons/material';

export const CollapseWrapper = styled.div`
  display: ${({ open }) => !open && 'none'};
`;

export const ReadButton = styled(Button)`
  position: relative;
  text-transform: uppercase;
  color: var(--orange);
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  min-height: 48px;
  padding: 0 16px;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const ButtonText = styled.div`
  margin-bottom: 16px;
`;

export const ExpandLess = styled(StyledExpandLess)`
  position: absolute;
  display: block;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 20%);
`;

export const ExpandMore = styled(StyledExpandMore)`
  position: absolute;
  display: block;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 20%);
`;
