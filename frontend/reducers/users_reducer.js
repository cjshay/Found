import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';

const defaultUser = {
  username: '',
  description: '',
  follows: {
    followee_ids: [],
    follower_ids: []
  }
};

const storiesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {};
  switch(action.type) {
    case RECEIVE_USER:
      return Object.assign({}, newState, state, action.user);
    case RECEIVE_USERS:
      return Object.assign({}, newState, state, action.users);
    default:
      return state;
  }
};
