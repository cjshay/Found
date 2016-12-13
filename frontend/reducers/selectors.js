import { values } from 'lodash';

export const selectStories = (stories) => {
  return values(stories)
  .filter(story => story.parent_id === null);
};

export const selectFeedStories = (stories, currentUser) => {
  const storyValues = values(stories);
  const nonResponseStories = storyValues
  .filter(story => story.parent_id === null);

  if (currentUser === null) {
    return nonResponseStories;
  }

  return nonResponseStories
  .filter(story => currentUser.follows.followee_ids.includes(story.author.id));
};

export const selectResponses = (stories, parentId) => {
  return values(stories)
  .filter(story => story.parent_id === parseInt(parentId));

};

export const selectUserStories = (stories, userId) => {
  return values(stories)
  .filter(story => story.author.id === parseInt(userId));
};
