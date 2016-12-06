export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {user: user}
  });
};

export const signin = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user: user}
  });
};

export const signout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session',
  });
};
