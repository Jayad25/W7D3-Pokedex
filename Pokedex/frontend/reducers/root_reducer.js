import entitiesReducer from './entities_reducer';
import {combineReducers} from 'redux';
// import {uiReducer} from './ui_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  // uiReducer:uiReducer,
});

export default rootReducer;
