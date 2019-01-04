import React from 'react';

import { Social } from 'app/Social';
import {
  FooterWrapper,
  BeltHeader,
  FooterContent,
  AddressWrapper,
  AddressSpan,
  CopyrightWrapper,
} from '../styles/Footer.styles';

const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <BeltHeader as="h4">
        Proud affiliated of Start Brazilian Jiu Jitsu Association
      </BeltHeader>
      <Social />
      <AddressWrapper>
        <AddressSpan>121 85th Ave NW</AddressSpan>
        <AddressSpan>Coon Rapids, MN</AddressSpan>
      </AddressWrapper>
      <CopyrightWrapper>
        &copy; {new Date().getFullYear()} Twin Cities Brazilian Jiu Jitsu.
      </CopyrightWrapper>
    </FooterContent>
  </FooterWrapper>
);

export default Footer;
