export const RECEIVE_STORIES = "RECEIVE_STORIES";
export const RECEIVE_STORY = "RECEIVE_STORY";
export const REMOVE_STORY = "REMOVE_STORY";
// export const RECEIVE_RESPONSES = "RECEIVE_RESPONSES";
export const RECEIVE_STORY_ERRORS = "RECEIVE_STORY_ERRORS";


import * as APIUtil from '../util/story_api_util';


// THUNK ACTION CREATORS
// TODO: take out these storyId arguments
export const fetchStories = (storyId) => {
  return (dispatch) => {
    return APIUtil.fetchStories(storyId).then(
      (stories) => {

        return dispatch(receiveStories(stories));
      }
    );
  };
};

export const fetchUserStories = () => {
  return (dispatch) => {
    return APIUtil.fetchStories().then(
      stories => dispatch(receiveStories)
    );
  };
};

export const fetchResponses = (parentId) => {
  return (dispatch) => {
    return APIUtil.fetchResponses(parentId).then(
      (responses) => {
        return dispatch(receiveStories(responses));
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


export const createStory = (formData) => {
  return (dispatch) => {
    return APIUtil.createStory(formData).then(
      (createdStory) => dispatch(receiveStory(createdStory)),
      (errors) => dispatch(receiveStoryErrors(errors.responseJSON))
    );
  };
};
export const updateStory = (story) => {
  return (dispatch) => {
    return APIUtil.updateStory(story).then(
      (updatedStory) => dispatch(receiveStory(updatedStory)),
      (errors) => dispatch(receiveStoryErrors(errors.responseJSON))
    );
  };
};
export const deleteStory = (storyId) => {
  return (dispatch) => {
    return APIUtil.deleteStory(storyId).then(
      () => dispatch(removeStory(storyId)),
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
      (likedStory) => dispatch(receiveStory(likedStory))
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
      (unlikedStory) => dispatch(receiveStory(unlikedStory))
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

export const removeStory = (storyId) => {
  return {
    type: REMOVE_STORY,
    storyId
  };
};

// export const receiveResponses = (responses) => {
//   return {
//     type: RECEIVE_RESPONSES,
//     responses
//   };
// };

export const receiveStoryErrors = errors => {
  return {
    type: RECEIVE_STORY_ERRORS,
    errors
  };
};
