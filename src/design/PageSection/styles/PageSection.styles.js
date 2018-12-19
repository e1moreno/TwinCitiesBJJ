import styled from 'styled-components';

export const Section = styled.section`
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const SectionContent = styled.div`
  max-width: 1200px;
  padding: 16px;
  margin: 0 auto;
`;
