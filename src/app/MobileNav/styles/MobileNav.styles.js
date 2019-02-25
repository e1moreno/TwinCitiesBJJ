import styled, { css, keyframes } from 'styled-components';

const slideInKeyFrame = keyframes`
  100% { transform: translateX(-100%); }
`;

const slideOutKeyFrame = keyframes` 
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0%); }
`;

const slideOutAnimation = () => css`
  ${slideOutKeyFrame} 0.3s forwards
`;

const slideInAnimation = () => css`
  ${slideInKeyFrame} 0.3s forwards
`;

export const SlideMenu = styled.div`
  position: fixed;
  z-index: 2;
  right: calc((100% - 48px) * -1);
  top: 0;
  height: 100%;
  width: calc(100% - 48px);
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23fcfcfc' fill-opacity='0.89'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");

  animation: ${({ open, initialized }) => initialized && (!open ? slideOutAnimation : slideInAnimation)};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  background: rgba(0, 0, 0, 0.5) none repeat scroll 0% 0%;
  opacity: 0;

  ${({ visible }) => visible
    && `
    transition: opacity 0.3s ease 0s;
    z-index: 1 !important;
    opacity: 1 !important;
    cursor: pointer;
  `}
`;

export const NavigationWrapper = styled.nav`
  display: flex;
  flex-direction: column;
`;
