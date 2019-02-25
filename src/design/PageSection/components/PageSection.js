import React from 'react';
import PropTypes from 'prop-types';

import { Section, SectionContent } from '../styles/PageSection.styles';

const PageSection = ({
  color,
  backgroundColor,
  children,
  sectionRef,
  ...other
}) => (
  <Section
    color={color}
    backgroundColor={backgroundColor}
    {...!!sectionRef && { ref: sectionRef }}
    {...other}
  >
    <SectionContent>{children}</SectionContent>
  </Section>
);
PageSection.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  sectionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  children: PropTypes.node.isRequired,
};

PageSection.defaultProps = {
  color: null,
  backgroundColor: null,
  sectionRef: null,
};

export default PageSection;
