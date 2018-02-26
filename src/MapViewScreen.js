import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
var {GooglePlacesAutocomplete} = require('react-native-google-places-autocomplete');
import { updateMapMarker } from './actions/MainActions';
import { connect } from 'react-redux';

import SearchBar from './components/SearchBar';

const homePlace = {description: 'Home', geometry: { location: { lat: 42.3969, lng: -71.1224 } }};
const workPlace = {description: 'Work', geometry: { location: { lat: 52.3, lng: -61.1 } }};

var screenWidth = Dimensions.get('window').width;

class MapViewScreen extends Component {
    
  constructor(props) {
    super(props)
    this.state = state = {
      markers: [
        {
          coordinate: {
            latitude: 45.524548,
            longitude: -122.6749817,
          },
          title: "Best Place",
          description: "This is the best place in Portland",
          
        },
        {
          coordinate: {
            latitude: 45.524698,
            longitude: -122.6655507,
          },
          title: "Second Best Place",
          description: "This is the second best place in Portland",
          
        },
        {
          coordinate: {
            latitude: 45.5230786,
            longitude: -122.6701034,
          },
          title: "Third Best Place",
          description: "This is the third best place in Portland",
          
        },
        {
          coordinate: {
            latitude: 45.521016,
            longitude: -122.6561917,
          },
          title: "Fourth Best Place",
          description: "This is the fourth best place in Portland",
          
        },
      ],
      region: {
        latitude: 45.52220671242907,
        longitude: -122.6653281029795,
        latitudeDelta: 0.04864195044303443,
        longitudeDelta: 0.040142817690068,
      },
    };
  }


  render() {
     console.log(this.props.lat); 
    return (
    <View style={styles.container}>


        <MapView
            style={styles.map}
            initialRegion={
                this.state.region
            }>
            {/* <Marker
                coordinate={{
                    latitude:  (this.props.lat != null ? -25.274398 : -36.848459),
                    longitude: (this.props.lng != null ? 133.775136 : 174.7633315)
                }}/> */}

              {this.state.markers.map((marker, index) => {
                  return (
                    <MapView.Marker key={index} coordinate={marker.coordinate}>
                    </MapView.Marker>
                  );
                })}
        </MapView>

        <SearchBar/>
    

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  }
});


const mapStateToProps = (state) => {
    console.log(state.auth);
    const { lat, lng } = state.auth.location;
    
    return { lat, lng };
};

export default connect(mapStateToProps, { updateMapMarker })(MapViewScreen);