import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      if( state.findIndex( (el) => el.city.id === action.payload.data.city.id) === -1 ){
        return [action.payload.data, ...state];
      }      
  }
  return state;
}