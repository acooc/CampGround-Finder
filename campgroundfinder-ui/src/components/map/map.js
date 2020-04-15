import React, { Component } from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

import { googleApiKey } from '../../secret';

// class that contains all the google maps and the marker position with specific positioning based on the data 
class WrappedGoogleMap extends Component {
  render() {
    console.log(this.props);
    return (
      <GoogleMap
        defaultOptions={{mapTypeControl: false}}
        zoom={8}
        center={{ lat: this.props.lat, lng: this.props.lng }}>
        <Marker position={{ lat: this.props.lat, lng: this.props.lng }} />
      </GoogleMap>
    )
  }
}

// merges the current props with the function returns
// contains Google API, which is stored separately in another file and also controls the style of the amp
const MapWithMarker = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3exp&libraries=geomtery,drawing,places&key=${googleApiKey}`,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '480px', marginLeft: "15px"}} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)
  (WrappedGoogleMap)


export default MapWithMarker;


