import {createStore,applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import  thunkMiddleware   from '../middleware/thunk.js';

import logger from 'redux-logger';

const configureStore = () =>(
  createStore(
   rootReducer,
   applyMiddleware(thunkMiddleware, logger)
  )
);


export default configureStore;
