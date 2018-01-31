import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import MapView from 'react-native-maps';
var {GooglePlacesAutocomplete} = require('react-native-google-places-autocomplete');

const homePlace = {description: 'Home', geometry: { location: { lat: 42.3969, lng: -71.1224 } }};
const workPlace = {description: 'Work', geometry: { location: { lat: 42.3, lng: -71.1 } }};

var screenWidth = Dimensions.get('window').width;

export default class MapViewScreen extends Component {
  render() {
    return (
    <View style={styles.container}>


        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 42.3967,
                longitude: -71.1223,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>
            <MapView.Marker
                coordinate={{
                    latitude: 42.3967,
                    longitude: -71.1223
                }}/>
        </MapView>



        <GooglePlacesAutocomplete
            placeholder='Search location'
            minLength={2}
            autoFocus={false}
            autoCorrect={false}
            listViewDisplayed='auto'        // true/false/undefined
            fetchDetails={true}
            renderDescription={(row) => row.description}    // custom description render
            onPress={(data, details = null) => {    // 'details' is provided when fetchDetails = true
                console.log(data)
                console.log(details)
            }}
            getDefaultValue={() => {
                return '';      // text input default value
            }}
            query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: 'AIzaSyAUYfbKtctkIibOgFnNN2x9Xg9i0sVxlhQ',
                language: 'en',
                types: 'geocode'
            }}
            styles={{
                container:{
                    position: 'absolute',
                    top: 0
                  },
                description: {
                    fontWeight: 'bold',
                },
                predefinedPlacesDescription: {
                    color: '#1faadb',
                },
                textInputContainer: {
                    backgroundColor: 'rgba(0,0,0,0)',
                    top: 15,
                    width: screenWidth-10,
                    borderWidth: 0
                },
                textInput: {
                    marginLeft: 0,
                    marginRight: 0,
                    height: 38,
                    color: '#5d5d5d',
                    fontSize: 16,
                    borderWidth: 0
                },
                listView: {
                    backgroundColor: 'rgba(192,192,192,0.9)',
                    top: 23
                }
            }}

            currentLocation={true}
            currentLocationLabel="Current location"
            nearbyPlacesAPI='GooglePlacesSearch'
            GoogleReverseGeocodingQuery={{
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            }}
            GooglePlacesSearchQuery={{
                // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                rankby: 'distance',
                types: 'food'
            }}

            filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3', 'sublocality', 'administrative_area_level_2', 'administrative_area_level_1']}
            // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

            predefinedPlaces={[homePlace, workPlace]}

            debounce={200}
            //renderLeftButton={() => <Image source={require('left-icon')} />}
            renderLeftButton={() => <Text></Text> }
            renderRightButton={() => <Text></Text> }


        />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});