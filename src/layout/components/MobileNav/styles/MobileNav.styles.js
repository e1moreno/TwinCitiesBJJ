import styled, { css, keyframes } from 'styled-components';
import BaseOverlay from 'lib/Overlay/Overlay';

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
  background-color: var(--white);
  overflow: none;
  animation: ${({ initialized, open }) =>
    initialized && (!open ? slideOutAnimation : slideInAnimation)};
`;

export const Overlay = styled(BaseOverlay)``;
