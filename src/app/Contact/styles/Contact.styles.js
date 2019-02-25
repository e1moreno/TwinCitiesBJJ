import styled from 'styled-components';
import { PageSection as BasePageSection } from 'design/PageSection';
import { SectionContent as BaseSectionContent } from 'design/PageSection/styles/PageSection.styles';
import { Icon as BaseIcon } from 'design/Icon';

export const MainContent = styled.main``;

export const PageSection = styled(BasePageSection)`
  margin-top: 32px;

  @media (max-width: 600px) {
    padding: 0;
  }

  ${BaseSectionContent} {
    padding: 0;
  }
`;

export const TwinCitiesName = styled.h3`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: underline;
  padding: 0 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: ${({ mobile }) => mobile && 'column'};
`;

const BaseColumn = styled.section`
  padding: 0 16px;
`;

export const ContactColumn = styled(BaseColumn)`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: ${({ mobile }) => (!mobile ? '0 8px 0 0' : '0 0 8px 0')};
`;

export const ContactSection = styled.div``;

export const Subheader = styled.h4`
  margin: 0 0 4px 0;
  text-transform: uppercase;
`;

export const SectionContent = styled.div`
  padding: 0 0 24px 0;
  margin: 1rem 0 0 0;

  &:not(:last-child) {
    border-bottom: 2px solid #23478b;
  }
`;

export const ContentSplit = styled.div`
  display: flex;
`;

export const TextWrapper = styled.span`
  margin-left: 24px;
  flex: 1;
`;

export const Icon = styled(BaseIcon)`
  height: 36px;
  width: 36px;

  & .symbol-icon {
    height: 1.7rem;
  }
`;

export const NavigationIcon = styled(Icon)`
  color: #ed4544;
`;

export const PhoneIcon = styled(Icon)`
  color: #43b51f;
`;

export const JoinColumn = styled(BaseColumn)`
  flex: 1;
  margin: ${({ mobile }) => (!mobile ? '0 0 0 8px' : '8px 0 0 0')};
  padding: ${({ mobile }) => mobile && 0};
`;

export const JoinSection = styled.div`
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23fcfcfc' fill-opacity='0.89'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px -1px 8px rgba(0, 0, 0, 0.15);
  border-radius: ${({ mobile }) => !mobile && '5px'};
  padding: 32px 16px;
`;

export const JoinHeader = styled.h3`
  position: relative;
  text-align: center;
  text-transform: uppercase;
  color: var(--black);
  font-size: 1.6rem;
  margin: 0;
`;

export const JoinSubheader = styled.h4`
  margin: 8px 0 16px 0;
  color: var(--gray);
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
`;
