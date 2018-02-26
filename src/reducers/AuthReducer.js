import { UPDATE_MAP_MARKER, UPDATE_PARKING_LOCATIONS }from '../actions/types';

const INITIAL_STATE = {
    loading: '',
    location: {
        lat: '-25.274398',
        lng: '133.775136'
      },
    parkLocations: {}
}

export default (state = INITIAL_STATE, action) => { 
   
    switch(action.type) {
        case UPDATE_MAP_MARKER:
            return { ...state, location: action.payload}
        case UPDATE_PARKING_LOCATIONS:
            return { ...state, parkLocations: action.payload}
        default:
            return state;
    }
};