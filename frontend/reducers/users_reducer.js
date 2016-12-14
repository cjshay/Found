import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_STORY } from '../actions/story_actions';
import {values} from 'lodash';
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
const defaultUsers = {
  id: defaultUser
};
const usersReducer = (state = defaultUsers, action) => {
  Object.freeze(state);
  const newState = {};
  switch(action.type) {
    case RECEIVE_USER:
      return Object.assign({}, newState, state, action.user);
    // case RECEIVE_STORY:
    //   const user = values(action.stories)[0].author;
    //   const userId = user.id;
    //   const users = {};
    //   users[userId] = user;
    //   return Object.assign({}, state, users);
    case RECEIVE_USERS:
      return Object.assign({}, newState, state, action.users);
    default:
      return state;
  }
};

export default usersReducer;
