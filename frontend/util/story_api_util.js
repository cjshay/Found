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

export const createStory = (story) => {
  return $.ajax ({
    method: 'POST',
    url: `/api/stories`,
    data: {story: story}
  });
};

export const updateStory = (story) => {
  return $.ajax ({
    method: 'PATCH',
    url: `/api/stories/${story.id}`,
    data: {story: story}
  });
};

export const deleteStory = (storyId) => {
  return $.ajax ({
    method: 'DELETE',
    url: `/api/stories/${storyId}`,
  });
};
