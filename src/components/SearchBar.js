import React , { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

var {GooglePlacesAutocomplete} = require('react-native-google-places-autocomplete');
import { connect } from 'react-redux';

import updateParkingLocations from '../actions/MainActions';

const homePlace = {description: 'Home', geometry: { location: { lat: 42.3969, lng: -71.1224 } }};
const workPlace = {description: 'Work', geometry: { location: { lat: 42.3, lng: -71.1 } }};

var screenWidth = Dimensions.get('window').width;

class SearchBar extends Component {


    render() {
        return (
            <View>
            <GooglePlacesAutocomplete
            placeholder='Search location'
            minLength={2}
            autoFocus={false}
            autoCorrect={false}
            listViewDisplayed='auto'        // true/false/undefined
            fetchDetails={true}
            renderDescription={(row) => row.description}    // custom description render
            onPress={(data, details = null) => {    // 'details' is provided when fetchDetails = true
                console.log(data);
                //console.log(details.geometry.location);
                //this.props.updateParkingLocations('tst');
            }}
            getDefaultValue={() => {
                return '';      // text input default value
            }}
            query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
               // key: 'AIzaSyAUYfbKtctkIibOgFnNN2x9Xg9i0sVxlhQ',
                key: 'AIzaSyDIDKRZqs8yz7BU_BR0_Z7aiOpZ85ajbQc',
                language: 'en',
                types: 'geocode',
                region: '.nz'
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
                types: 'food',
                region: '.nz'
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

const mapStateToProps = state => {

    return state;
}

export default connect(mapStateToProps, { updateParkingLocations })(SearchBar);
