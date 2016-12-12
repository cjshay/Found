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
