import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Map from '../components/Map';

const MapContainer = ({ coordinates, navigationUrl }) => {
  const onChildClick = useCallback(() => {
    window.location = navigationUrl;
  }, [navigationUrl]);

  return <Map coordinates={coordinates} onChildClick={onChildClick} />;
};

MapContainer.propTypes = {
  coordinates: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  navigationUrl: PropTypes.string.isRequired,
};

export default MapContainer;
