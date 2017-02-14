export const fetchStories = () => {
  return $.ajax ({
    method: 'GET',
    url: '/api/stories'
  });
};

export const fetchResponses = (parentId) => {
  return $.ajax ({
    method: 'GET',
    url: `/api/stories/${parentId}/responses`,
    data: { parent_id: parentId }
  });
};

export const fetchStory = (storyId) => {
  return $.ajax ({
    method: 'GET',
    url: `/api/stories/${storyId}`,
    data: { id: storyId }
  });
};

export const createStory = (formData) => {
  return $.ajax ({
    method: 'POST',
    url: `/api/stories`,
    data: formData,
    contentType: false,
    processData: false
  });
};

export const updateStory = (formData, storyId) => {
  return $.ajax ({
    method: 'PATCH',
    url: `/api/stories/${storyId}`,
    data: formData,
    contentType: false ,
    processData: false
  });
};

export const deleteStory = (storyId) => {
  return $.ajax ({
    method: 'DELETE',
    url: `/api/stories/${storyId}`,
  });
};

export const createLike = (storyId) => {
  return $.ajax ({
    method: 'POST',
    url: `/api/stories/${storyId}/likes`
  });
};

export const deleteLike = (storyId) => {
  return $.ajax ({
    method: 'DELETE',
    url: `/api/stories/${storyId}/likes/_`
  });
};
