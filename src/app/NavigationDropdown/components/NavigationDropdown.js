import React from 'react';
import PropTypes from 'prop-types';

import Tippy from '@tippy.js/react';
import 'tippy.js/themes/light.css';

import {
  LinkList,
  ListItem,
  PopoverButton,
  NavigationLink,
  ExpandLess,
  ExpandMore,
} from '../styles/NavigationDropdown.styles';

const Content = ({ data }) => (
  <LinkList>
    {data.map(({ text, slug }) => (
      <ListItem key={slug}>
        <NavigationLink to={slug}>{text}</NavigationLink>
      </ListItem>
    ))}
  </LinkList>
);

Content.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const NavigationDropdown = ({
  text,
  data,
  ariaExpanded,
  onPopoverMount,
  onPopoverHide,
}) => (
  <Tippy
    content={<Content data={data} />}
    theme="light"
    placement="bottom"
    trigger="click"
    animation="scale"
    appendTo="parent"
    aria={null}
    arrow
    inertia
    interactive
    duration={[300, 75]}
    onMount={onPopoverMount}
    onHide={onPopoverHide}
  >
    <PopoverButton aria-expanded={ariaExpanded} ariaExpanded={ariaExpanded}>
      {text} {ariaExpanded ? <ExpandLess /> : <ExpandMore />}
    </PopoverButton>
  </Tippy>
);

NavigationDropdown.propTypes = {
  text: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
  ariaExpanded: PropTypes.bool.isRequired,
  onPopoverMount: PropTypes.func.isRequired,
  onPopoverHide: PropTypes.func.isRequired,
};

export default NavigationDropdown;
