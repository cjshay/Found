import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { merge, values } from 'lodash';

const initialState = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = {currentUser: values(action.user)[0]};
      newState = merge({}, initialState, currentUser);
      return newState;
    case RECEIVE_ERRORS:
      const errors = {errors: action.errors};
      newState = merge({}, state, errors);
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
