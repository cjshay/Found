import sessionReducer from './session_reducer';
import storiesReducer from './stories_reducer';
import usersReducer from './users_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session: sessionReducer,
  stories: storiesReducer,
  users: usersReducer
 });

export default rootReducer;
