import { values } from 'lodash';

export const selectStories = (stories) => {
  return values(stories)
  .filter(story => story.parent_id === null);
};

export const selectResponses = (stories, parentId) => {
  return values(stories)
  .filter(story => story.parent_id === parseInt(parentId));

};

export const selectUserStories = (stories, userId) => {
  return values(stories)
  .filter(story => story.author.id === parseInt(userId));
};
