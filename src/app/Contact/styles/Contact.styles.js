import styled from 'styled-components';

import ContentHeader from 'design/ContentHeader/ContentHeader';
import { Icon as BaseIcon } from 'design/Icon';
import { SMALL_VIEW } from 'utils/constants';

export const MainContent = styled.main`
  @media (min-width: ${SMALL_VIEW}px) {
    margin-bottom: 3rem;
  }
`;

export const TwinCitiesName = styled.h3`
  display: flex;
  max-width: 1040px;
  margin: 0 auto;
  padding: 3.375em 1rem 0 1rem;

  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: underline;

  @media (max-width: ${SMALL_VIEW}px) {
    flex-direction: column;
    padding: 2.375em 1rem 0 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: 1040px;
  margin: 0 auto;

  @media (max-width: ${SMALL_VIEW}px) {
    flex-direction: column;
  }
`;

const BaseColumn = styled.section`
  position: relative;
`;

export const ContactColumn = styled(BaseColumn)`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 1.5rem 0 1rem;

  @media (max-width: ${SMALL_VIEW}px) {
    margin: 0 0 1rem 0;
  }
`;

export const JoinColumn = styled(BaseColumn)`
  flex: 1;
  height: 100%;
  margin: 0 0 0 8px;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23fcfcfc' fill-opacity='0.89'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px -1px 8px rgba(0, 0, 0, 0.15);

  margin: 1rem 1rem 1.5rem 0;
  padding: 32px 16px;

  @media (max-width: ${SMALL_VIEW}px) {
    margin: 0;
    border-radius: 0;
    padding: 2.375em 5%;
  }
`;

export const ContactSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${SMALL_VIEW}px) {
    padding: 0 1rem;
  }
`;

export const Subheader = styled.h4`
  margin: 0 0 4px 0;
  text-transform: uppercase;
`;

export const SectionContent = styled.div`
  padding: 0 0 1.5rem 0;
  margin: 1rem 0 0 0;
`;

export const ContentSplit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.span`
  margin-left: 24px;
  flex: 1;
`;

export const Icon = styled(BaseIcon)`
  height: 42px;
  width: 42px;

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

export const JoinSection = styled.div``;

export const JoinHeader = styled(ContentHeader)`
  position: relative;
  text-align: center;
  text-transform: uppercase;
  color: var(--black);
  font-size: 1.6rem;
  margin: 0;

  &::before {
    background-color: var(--brown);
  }
`;

export const JoinSubheader = styled.h4`
  margin: 8px 0 16px 0;
  color: var(--gray);
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
`;
