import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  color: ${({ color }) => color};
  background: ${({ backgroundColor }) => backgroundColor};
  background-image: ${({ backgroundImage }) => backgroundImage};
  padding-bottom: 16px;
`;

export const SectionContent = styled.div`
  max-width: 1200px;
  padding: 16px;
  margin: 0 auto;
`;
