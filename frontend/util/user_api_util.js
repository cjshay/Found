export const fetchUser = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${userId}`
  });
};

export const createFollow = (followeeId) => {
  return $.ajax({
    method: "POST",
    url: `api/users/${followeeId}/follows`
  });
};

export const deleteFollow = (followeeId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/users/${followeeId}/follows/_`
  });
};

export const updateUser = (user) => {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${user.id}`,
    data: {user: user}
  });
};
