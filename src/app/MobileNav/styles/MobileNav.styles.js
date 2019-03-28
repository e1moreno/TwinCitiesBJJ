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
  background-color: var(--white);

  animation: ${({ initialized, open }) => initialized && (!open ? slideOutAnimation : slideInAnimation)};
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
  margin-top: 86px;
  padding: 32px 16px;
  background-color: var(--pureBlack);
`;
