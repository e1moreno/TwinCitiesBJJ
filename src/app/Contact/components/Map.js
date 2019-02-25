import React from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';

import { MapWrapper } from '../styles/Map.styles';

const Map = ({ coordinates, onGoogleApiLoaded }) => (
  <MapWrapper>
    <GoogleMap
      bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_API_KEY }}
      defaultCenter={coordinates}
      defaultZoom={17}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={onGoogleApiLoaded}
    />
  </MapWrapper>
);

Map.propTypes = {
  coordinates: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  onGoogleApiLoaded: PropTypes.func.isRequired,
};

export default Map;
