class Api::PokemonController < ApplicationController
  
  def index
    @pokemons = Pokemon.all
    render :index
  end
  
  def create
  end
end
