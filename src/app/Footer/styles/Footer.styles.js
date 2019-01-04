import styled from 'styled-components';

import smallPatternBlack from 'images/smallPatternBlack.svg';

export const FooterWrapper = styled.footer`
  padding-top: 8px;
  background-color: #1e1e1e;
  background-image: url(${smallPatternBlack});
  text-align: center;
`;

export const BeltHeader = styled.h4`
  grid-area: affiliate;
  display: block;
  margin: 8px 0;
  font-size: 1.1rem;
  font-weight: 400;
  text-transform: uppercase;

  &::before {
    background-color: #5e0b8d;
  }
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100% 2fr 2fr 1rem;
  grid-template-areas:
    'affiliate'
    'social'
    'address'
    'copyright';
  padding: 0 24px 8px 24px;
  color: var(--off-white);
`;

export const AddressWrapper = styled.div`
  grid-area: address;
  padding: 8px 0;
`;

export const AddressSpan = styled.span`
  display: block;
`;

export const CopyrightWrapper = styled.div`
  grid-area: copyright;
  font-size: 0.7rem;
`;
