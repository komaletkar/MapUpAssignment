import { createStore, combineReducers } from 'redux';
import mapReducer from './reducers/mapReducer';
import nightModeReducer from './reducers/nightModeReducer';

const rootReducer = combineReducers({
  map: mapReducer,
  nightMode: nightModeReducer,
});
