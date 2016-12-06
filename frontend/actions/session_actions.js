export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

import * as APIUtil from '../util/session_api_util';

export function signin(user) {
  return (dispatch) => {

    return APIUtil.signin(user).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
  };
}


export function signup(user) {
  return (dispatch) => {

    return APIUtil.signup(user).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
  };
}

export function signout() {
  return (dispatch) => {
    return APIUtil.signout().then(
      (emptyUser) => dispatch(receiveCurrentUser(null)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
  };
}

// non-thunk actions
export const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};
