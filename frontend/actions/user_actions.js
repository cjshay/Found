import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

export const createFollow = (followeeId) => {
  return (dispatch) => {
    return APIUtil.createFollow(followeeId).then(
      user => dispatch(receiveUser(user)),
      errors => console.log(errors)
    );
  };
};

export const deleteFollow = (followeeId) => {
  return (dispatch) => {
    return APIUtil.deleteFollow(followeeId).then(
      user => dispatch(receiveUser(user)),
      errors => console.log(errors)
    );
  };
};

export const receiveUsers = (users) => {
  return {
    action: RECEIVE_USERS,
    users
  };
};

export const receiveUser = (user) => {
  return {
    action: RECEIVE_USER,
    user
  };
};
