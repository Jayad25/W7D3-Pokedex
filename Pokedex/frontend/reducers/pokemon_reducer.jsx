import {RECEIVE_ALL_POKEMON} from '../actions/pokemon_actions';

function pokemonReducer (state = {}, action){
  let newState = {};
  
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return newState;
    default:
      return state;
  }
}

export default pokemonReducer;