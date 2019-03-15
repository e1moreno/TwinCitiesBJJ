import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Map from '../components/Map';

const MapContainer = ({ coordinates }) => {
  const [map, setMap] = useState(null);

  const handleGoogleApiLoaded = useCallback(
    ({ map: apiMap }) => {
      setMap(apiMap);
    },
    [setMap],
  );

  return (
    <Map coordinates={coordinates} onGoogleApiLoaded={handleGoogleApiLoaded} />
  );
};

MapContainer.propTypes = {
  coordinates: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};

export default MapContainer;
