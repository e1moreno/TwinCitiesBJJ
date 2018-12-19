import React from 'react';
import PropTypes from 'prop-types';

import { Section, SectionContent } from '../styles/PageSection.styles';

const PageSection = ({ color, backgroundColor, children }) => (
  <Section color={color} backgroundColor={backgroundColor}>
    <SectionContent>{children}</SectionContent>
  </Section>
);
PageSection.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PageSection.defaultProps = {
  color: null,
  backgroundColor: null,
};

export default PageSection;
