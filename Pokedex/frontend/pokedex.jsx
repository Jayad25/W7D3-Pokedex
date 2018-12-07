import React from 'react';
import ReactDOM from 'react-dom';
import  {requestAllPokemon}  from './actions/pokemon_actions';
import configureStore from './store/store';
import Root from './components/root';
import { HashRouter, Route} from 'react-router-dom';



document.addEventListener("DOMContentLoaded",()=>{
  window.requestAllPokemon=requestAllPokemon;
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
