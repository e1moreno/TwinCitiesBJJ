import styled from 'styled-components';
import { PageSectionContainer as BasePageSection } from 'design/PageSection';

export const MainContent = styled.main`
  padding-top: var(--navBarHeight);
`;

export const PageSection = styled(BasePageSection)`
  text-align: center;
`;

export const Header = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
`;

export const Subheader = styled.h3`
  text-transform: uppercase;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400;
`;
