import { values } from 'lodash';

export const selectStories = (stories) => {
  return values(stories);
};

export const selectResponses = (stories, parentId) => {
  const allStories = values(stories);

  return allStories.filter((story) => {
    return story.id !== parseInt(parentId);
  });
};
