import styled, { css } from 'styled-components';
import Button from 'design/Button/Button';
import { SMALL_VIEW } from 'utils/constants';

export const MobileNavToggle = styled(Button)`
  grid-area: navigation;
  margin-right: 24px;
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 3 !important;
  outline: none;

  @media (min-width: ${SMALL_VIEW}px) {
    display: none;
  }
`;

export const MobileNavIconWrapper = styled.div`
  min-width: 48px;
  min-height: 48px;
  display: flex;
  justify-content: center;
  position: ${({ open }) => open && 'fixed'};
  transform: ${({ open }) => open && 'translate(-50%, -50%)'};

  &:focus {
    outline: none;
  }
`;

const openIcon = ({ open }) => css`
  background-color: ${!open ? 'var(--white)' : 'unset'};

  &:before {
    top: ${open ? '0 !important' : '-8px;'};
    transform: ${open && 'rotate(45deg)'};
    background-color: ${open ? 'var(--gray)' : 'var(--white)'};
  }

  &:after {
    top: ${open ? '0 !important' : '8px;'};
    transform: ${open && 'rotate(-45deg)'};
    background-color: ${open ? 'var(--gray)' : 'var(--white)'};
  }
`;

const bar = () => css`
  height: 3px;
  width: 26px;
  content: '';
  position: absolute;
  display: block;
  transition: all 300ms ease-in-out;
`;

export const MobileNavIcon = styled.span`
  top: 50%;
  ${bar}
  ${openIcon}

  &:before {
    ${bar}
  }

  &:after {
    ${bar}
  }

  &:focus {
    outline: none;
  }
`;
