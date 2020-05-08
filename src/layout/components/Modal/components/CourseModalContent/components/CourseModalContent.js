import React from 'react';
import PropTypes from 'prop-types';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import {
  Title,
  Entry,
  PropertyName,
  PropertyValue,
  Description,
} from '../styles/CourseModalContent.styles';

const CourseModalContent = ({ title, startTime, duration, json }) => (
  <>
    <Title>{title}</Title>
    <Entry>
      <PropertyName>Time:</PropertyName>{' '}
      <PropertyValue>{startTime}</PropertyValue>
    </Entry>
    <Entry>
      <PropertyName>Duration:</PropertyName>{' '}
      <PropertyValue>{duration} minutes</PropertyValue>
    </Entry>
    <Description>{json ? documentToReactComponents(json) : ''}</Description>
  </>
);

CourseModalContent.propTypes = {
  title: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  json: PropTypes.object,
};
CourseModalContent.defaultProps = {
  json: null,
};

export default CourseModalContent;
