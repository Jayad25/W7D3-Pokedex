import React from 'react';
import requestSinglePokemon from './pokemon_detail_container';


export default class PokemonDetail extends React.Component{



  componentDidMount(){
    this.props.requestSinglePokemon();
  }
  render(){
    return(
      <div>
        {this.props.pokemon.items.map(item => <li>{item.name}</li>)};
      </div>
    );
  }
}
