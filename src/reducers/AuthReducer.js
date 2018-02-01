import { UPDATE_MAP_MARKER }from '../actions/types';

const INITIAL_STATE = {
    loading: '',
    location: ''
}

export default (state = INITIAL_STATE, action) => { 
   
    switch(action.type) {
        case UPDATE_MAP_MARKER:
            return { ...state, location: action.payload}
        default:
            return state;
    }
};