import React from 'react';

import {
  Call as CallIcon,
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
} from 'styled-icons/material';

import { Icon } from 'lib/Icon';
import { ContactDiv } from '../styles/Contact.styles';

const Contact = () => (
  <ContactDiv>
    <Icon Symbol={CallIcon} color="#43b51f" variant="round" title="Call Us" />
    <Icon Symbol={EmailIcon} color="#005b8d" variant="round" title="Email Us" />
    <Icon
      Symbol={LocationOnIcon}
      color="#ed4544"
      variant="round"
      title="Find Us"
    />
  </ContactDiv>
);

export default Contact;
