import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Section, SectionContent } from '../styles/PageSection.styles';

const PageSection = forwardRef(
  ({
    visible, children, sectionRef, ...other
  }, ref) => (
    <Section ref={ref} {...other} visible={visible}>
      {visible && <SectionContent>{children}</SectionContent>}
    </Section>
  ),
);
PageSection.propTypes = {
  visible: PropTypes.bool,
  sectionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  children: PropTypes.node,
};

PageSection.defaultProps = {
  visible: false,
  sectionRef: null,
  children: null,
};

export default PageSection;
