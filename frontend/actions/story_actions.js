export const RECEIVE_STORIES = "RECEIVE_STORIES";
export const RECEIVE_STORY = "RECEIVE_STORY";
export const RECEIVE_STORY_ERRORS = "RECEIVE_STORY_ERRORS";


import * as APIUtil from '../util/story_api_util';


// THUNK ACTION CREATORS

export const fetchStories = () => {
  return (dispatch) => {
    return APIUtil.fetchStories().then(
      (stories) => {

        return dispatch(receiveStories(stories));
      },
      (errors) => console.log(errors)
    );
  };
};

export const fetchResponses = (parentId) => {
  return (dispatch) => {
    return APIUtil.fetchResponses(parentId).then(
      (responses) => dispatch(receiveStories(responses)),
      (errors) => console.log(errors)
    );
  };
};

export const fetchStory = (storyId) => {
  return (dispatch) => {
    return APIUtil.fetchStory(storyId).then(
      (story) => dispatch(receiveStory(story)),
      (errors) => dispatch(receiveStoryErrors(errors.responseJSON))
    );
  };
};


export const createStory = (story) => {
  return (dispatch) => {
    return APIUtil.createStory(story).then(
      (createdStory) => dispatch(receiveStory(createdStory)),
      (errors) => dispatch(receiveStoryErrors(errors.responseJSON))
    );
  };
};


// REGULAR ACTION CREATORS

export const receiveStories = (stories) => {
  return {
    type: RECEIVE_STORIES,
    stories
  };
};

export const receiveStory = (stories) => {
  return {
    type: RECEIVE_STORY,
    stories
  };
};

export const receiveStoryErrors = errors => {
  return {
    type: RECEIVE_STORY_ERRORS,
    errors
  };
};
