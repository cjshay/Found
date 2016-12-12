export const RECEIVE_STORIES = "RECEIVE_STORIES";
export const RECEIVE_STORY = "RECEIVE_STORY";
export const RECEIVE_RESPONSES = "RECEIVE_RESPONSES";
export const RECEIVE_STORY_ERRORS = "RECEIVE_STORY_ERRORS";


import * as APIUtil from '../util/story_api_util';


// THUNK ACTION CREATORS

export const fetchStories = (storyId) => {
  return (dispatch) => {
    return APIUtil.fetchStories(storyId).then(
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
      (responses) => {
        return dispatch(receiveResponses(responses));
      },
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


export const createLike = (story) => {
  return (dispatch) => {
    // const likedStory = Object.assign({}, story);
    // ++ likedStory.likes;
    // const likedStories = {};
    // likedStories[likedStory.id] = likedStory;
    return APIUtil.createLike(story.id).then(
      (likedStory) => dispatch(receiveStory(likedStory)),
      () => console.log("error")
    );
  };
};

export const deleteLike = (story) => {
  return (dispatch) => {
    // const likedStory = Object.assign({}, story);
    // ++ likedStory.likes;
    // const likedStories = {};
    // likedStories[likedStory.id] = likedStory;
    return APIUtil.deleteLike(story.id).then(
      (unlikedStory) => dispatch(receiveStory(unlikedStory)),
      () => console.log("error")
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

export const receiveResponses = (responses) => {
  return {
    type: RECEIVE_RESPONSES,
    responses
  };
};

export const receiveStoryErrors = errors => {
  return {
    type: RECEIVE_STORY_ERRORS,
    errors
  };
};
