import styled from 'styled-components';
import { SMALL_VIEW } from 'utils/constants';

export const Section = styled.section`
  position: relative;
  color: ${({ color }) => color};
  background: ${({ backgroundColor }) => backgroundColor};
  background-image: ${({ backgroundImage }) => backgroundImage};
  padding: 2.375rem 5%;

  @media (min-width: ${SMALL_VIEW}px) {
    padding: 3.375rem 5%;
  }
`;

export const SectionContent = styled.div`
  max-width: var(--pageSectionMaxWidth);
  margin: 0 auto;
`;
