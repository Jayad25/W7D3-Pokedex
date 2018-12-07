import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = ({pokemon}) =>{
  return(
    <Link to='/pokemon/:id'>
    <li key={pokemon.id}>
      {pokemon.name}<img className="pokemon-img" src={pokemon.image_url}/>
    </li>
  </Link>);
};

// <li key={poke.id}>{poke.name}
// <img className="pokemon-img" src={poke.image_url}/>
