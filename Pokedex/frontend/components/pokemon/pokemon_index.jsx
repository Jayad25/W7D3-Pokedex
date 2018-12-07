import React from 'react';
import requestAllPokemon from './pokemon_index_container';
import { PokemonIndexItem } from './pokemon_index_item';

export default class PokemonIndex extends React.Component{
  constructor (props){
    super(props);

  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    const pokemonItems = this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);
    return(
      <section className="pokedex">
        <ul>
          {pokemonItems}
        </ul>
      </section>
    );
  }
}


// <ul>
//   {this.props.pokemon.map(poke => PokemonIndexItem(poke))}
// </ul>);
