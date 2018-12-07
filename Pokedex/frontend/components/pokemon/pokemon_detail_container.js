import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import {selectSinglePokemon} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) =>({
  pokemon: state.entities.pokemon[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
