import { values } from 'lodash';

export const selectStories = (stories) => {
  return values(stories)
  .filter(story => story.parent_id === null);
};

export const selectFeedStories = (stories, currentUser) => {
  const storyValues = values(stories);
  const nonResponseStories = storyValues
  .filter(story => story.parent_id === null);
  let storyValuesWithoutCurrentStory = nonResponseStories.slice();
  if (stories.currentStory !== undefined) {
    storyValuesWithoutCurrentStory = nonResponseStories.slice(0, nonResponseStories.length - 1);
  }
  if (currentUser === null) {
    return storyValuesWithoutCurrentStory;
  }
  return storyValuesWithoutCurrentStory
  .filter(story => story.author !== undefined && currentUser.follows.followee_ids.includes(story.author.id));
};

export const selectResponses = (stories, parentId) => {
  const responseValues = values(stories);
  const responseValuesWithoutCurrentStory = responseValues.slice(0, responseValues.length - 1);
  return responseValuesWithoutCurrentStory
  .filter(story => story.parent_id === parseInt(parentId));

};

export const selectUserStories = (stories, userId) => {
  const storyValues = values(stories);
  const storyValuesWithoutCurrentStory = storyValues.slice(0, storyValues.length - 1);
  return storyValuesWithoutCurrentStory
  .filter(story => {
    return story.author !== undefined && story.author.id === parseInt(userId) && story.parent_id === null;
  });
};
