import styled, { css, keyframes } from 'styled-components';
import { SMALL_VIEW } from 'utils/constants';

export const Section = styled.section`
  position: relative;
  color: ${({ color }) => color};
  background: ${({ backgroundColor }) => backgroundColor};
  background-image: ${({ backgroundImage }) => backgroundImage};
  padding: 2.375rem 5%;
  min-height: ${({ visible }) => !visible && '300px'};

  @media (min-width: ${SMALL_VIEW}px) {
    padding: 3.375rem 5%;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeInAnimation = () => css`
  ${fadeIn} 1s
`;

export const SectionContent = styled.div`
  max-width: var(--pageSectionMaxWidth);
  margin: 0 auto;
  animation: ${fadeInAnimation};
`;
