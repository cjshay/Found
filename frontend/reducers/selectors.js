import { values } from 'lodash';

export const selectStories = (stories) => {
  return values(stories);
};

export const selectResponses = (stories, storyId) => {
  const allStories = values(stories);
  if (storyId === undefined) {
    return undefined;
  }
  if (allStories.length === 1) {
    return [];
  }
  return allStories.filter((story) => {
    return (story.id === storyId);
  });
};
