import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import { MapWrapper, LocationOn } from '../styles/Map.styles';

const Map = ({ coordinates, onChildClick }) => (
  <MapWrapper>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_API_KEY }}
      defaultCenter={coordinates}
      yesIWantToUseGoogleMapApiInternals
      defaultZoom={17}
      onChildClick={onChildClick}
    >
      <LocationOn lat={coordinates.lat} lng={coordinates.lng} />
    </GoogleMapReact>
  </MapWrapper>
);

Map.propTypes = {
  coordinates: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  onChildClick: PropTypes.func.isRequired,
};

export default Map;
