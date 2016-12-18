import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_STORY } from '../actions/story_actions';
import {values, merge} from 'lodash';
// import merge from 'lodash/merge';

const defaultUser = {
  id: null,
  username: '',
  description: '',
  follows: {
    followee_ids: [],
    follower_ids: [],
    followee_count: 0,
    follower_count: 0
  }
};
const id = 0;
const defaultUsers = {};
defaultUsers[defaultUser.id] = defaultUser;
const usersReducer = (state = defaultUsers, action) => {
  Object.freeze(state);
  const newState = {};
  switch(action.type) {
    case RECEIVE_USER:
      newState.userDetail = values(action.user)[0];
      return Object.assign({}, state, newState, action.user);
    case RECEIVE_USERS:
      return Object.assign({}, newState, state, action.users);
    default:
      return state;
  }
};

export default usersReducer;
