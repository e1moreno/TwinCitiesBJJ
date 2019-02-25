import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Call as CallIcon,
  LocationOn as LocationOnIcon,
} from 'styled-icons/material';

import { Banner } from 'app/Banner';
import floorImage from 'images/floor.jpg';

import { JoinFormContainer } from 'app/JoinForm';
import MapContainer from '../containers/MapContainer';
import {
  MainContent,
  PageSection,
  Content,
  ContactColumn,
  TwinCitiesName,
  ContactSection,
  SectionContent,
  Subheader,
  ContentSplit,
  TextWrapper,
  NavigationIcon,
  PhoneIcon,
  JoinColumn,
  JoinSection,
  JoinHeader,
  JoinSubheader,
} from '../styles/Contact.styles';

const ContactArea = ({
  coordinates,
  phoneNumber,
  streetAddress,
  address2,
  city,
  state,
  zipCode,
  navigationUrl,
}) => (
  <Fragment>
    <ContactSection>
      <SectionContent>
        <Subheader>Address</Subheader>
        <ContentSplit>
          <NavigationIcon
            href={navigationUrl}
            Symbol={LocationOnIcon}
            variant="round"
            title="Find Us"
          />
          <TextWrapper>
            {streetAddress}
            <br />
            {!!address2 && address2}
            <br />
            {city}, {state} {zipCode}
          </TextWrapper>
        </ContentSplit>
      </SectionContent>
      <SectionContent>
        <ContentSplit>
          <PhoneIcon
            href={`tel:${phoneNumber}`}
            Symbol={CallIcon}
            variant="round"
            title="Call Us"
          />
          <TextWrapper>
            <Subheader>Phone</Subheader>
            {phoneNumber}
          </TextWrapper>
        </ContentSplit>
      </SectionContent>
      <SectionContent>
        <MapContainer coordinates={coordinates} />
      </SectionContent>
    </ContactSection>
  </Fragment>
);
ContactArea.propTypes = {
  coordinates: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  phoneNumber: PropTypes.string.isRequired,
  streetAddress: PropTypes.string.isRequired,
  address2: PropTypes.string,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  navigationUrl: PropTypes.string.isRequired,
};
ContactArea.defaultProps = {
  address2: null,
};

const JoinArea = ({ mobile }) => (
  <JoinSection mobile={mobile}>
    <JoinHeader>Try a Free Class!</JoinHeader>
    <JoinSubheader>Fill out the form and we’ll be in touch!</JoinSubheader>
    <JoinFormContainer />
  </JoinSection>
);
JoinArea.propTypes = {
  mobile: PropTypes.bool,
};
JoinArea.defaultProps = {
  mobile: false,
};

const Contact = React.memo(
  ({
    coordinates,
    phoneNumber,
    streetAddress,
    address2,
    city,
    state,
    zipCode,
    navigationUrl,
    mobile,
  }) => (
    <Fragment>
      <Banner
        pageTitle="Contact"
        image={{
          source: floorImage,
          alt: 'Students Drilling reps on the ground',
        }}
      />
      <MainContent>
        <PageSection mobile={mobile}>
          <TwinCitiesName>Twin Cities BJJ and Fitness</TwinCitiesName>
          <Content mobile={mobile}>
            <ContactColumn mobile={mobile}>
              <ContactArea
                coordinates={coordinates}
                phoneNumber={phoneNumber}
                streetAddress={streetAddress}
                address2={address2}
                city={city}
                state={state}
                zipCode={zipCode}
                navigationUrl={navigationUrl}
              />
            </ContactColumn>
            <JoinColumn mobile={mobile}>
              <JoinArea mobile={mobile} />
            </JoinColumn>
          </Content>
        </PageSection>
      </MainContent>
    </Fragment>
  ),
);

Contact.propTypes = {
  coordinates: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  phoneNumber: PropTypes.string.isRequired,
  streetAddress: PropTypes.string.isRequired,
  address2: PropTypes.string,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  navigationUrl: PropTypes.string.isRequired,
  mobile: PropTypes.bool,
};
Contact.defaultProps = {
  mobile: false,
};
Contact.defaultProps = {
  address2: null,
};

export default Contact;
