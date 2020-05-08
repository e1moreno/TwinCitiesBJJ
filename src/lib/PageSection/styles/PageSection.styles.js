import styled, { css, keyframes } from 'styled-components';
import { SMALL_VIEW } from 'utils/constants';

export const Section = styled.section`
  position: relative;
  min-height: ${({ visible }) => !visible && '300px'};
  z-index: 0 !important;
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeInAnimation = () => css`
  ${fadeIn} 1.4s
`;

export const SectionContent = styled.div`
  max-width: var(--pageSectionMaxWidth);
  margin: 0 auto;
  animation: ${fadeInAnimation};
  padding: 2.375rem 5%;

  @media (min-width: ${SMALL_VIEW}px) {
    padding: 3.375rem 5%;
  }
`;
