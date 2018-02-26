import {
    UPDATE_MAP_MARKER,
    UPDATE_PARKING_LOCATIONS
} from './types.js';

const locations = 
     [
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
      ];
    

export const updateMapMarker = location => {
    console.log('update marker');
    console.log(location);
    return {
        type: UPDATE_MAP_MARKER,
        payload: location
    };
};


export const updateParkingLocations = location => {
    return {
        type: UPDATE_PARKING_LOCATIONS,
        payload: locations
    }
}