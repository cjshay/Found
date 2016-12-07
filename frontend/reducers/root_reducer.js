import sessionReducer from './session_reducer';
import storiesReducer from './stories_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session: sessionReducer,
  stories: storiesReducer
 });

export default rootReducer;
