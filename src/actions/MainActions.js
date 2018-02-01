import {
    UPDATE_MAP_MARKER
} from './types.js';


export const updateMapMarker = location => {
   
    return {
        type: UPDATE_MAP_MARKER,
        payload: location
    };
};