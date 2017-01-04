import * as APIUtil from '../util/user_api_util';


export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const createFollow = (followeeId) => {
  return (dispatch) => {
    return APIUtil.createFollow(followeeId).then(
      users => {
        dispatch(receiveCurrentUser(users));
        return dispatch(receiveUser(users));
      }
    );
  };
};

export const deleteFollow = (followeeId) => {
  return (dispatch) => {
    return APIUtil.deleteFollow(followeeId).then(
      users => {
        dispatch(receiveCurrentUser(users));
        return dispatch(receiveUser(users));
      }
    );
  };
};

export const fetchUser = (userId) => {
  return (dispatch) => {
    return APIUtil.fetchUser(userId).then(
      user => dispatch(receiveUser(user))
    );
  };
};

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};
