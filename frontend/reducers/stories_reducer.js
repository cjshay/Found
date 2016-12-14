import {
  RECEIVE_STORIES,
  RECEIVE_STORY,
  RECEIVE_RESPONSES,
  RECEIVE_STORY_ERRORS}
  from '../actions/story_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { merge, values } from 'lodash';


const defaultStory = {
  id: '',
  title: '',
  content: '',
  author: {
    username: '',
    description: ''
  }
};
const defaultStories = {
  stories: {
    id: defaultStory,
    currentStory: {}
  }
};


const storyReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = {};
  switch(action.type) {
    case RECEIVE_STORIES:
      const stories = Object.assign({}, newState, state, action.stories);
      return stories;
    case RECEIVE_STORY:
      const newStory = values(action.stories)[0];
      const currentStoryStories = {currentStory: newStory};
      const stateStories = Object.assign({}, newState, state, action.stories, currentStoryStories);
      return stateStories;
    case RECEIVE_STORY_ERRORS:
      const errors = {errors: action.errors};
      newState = merge({}, state, errors);
      return newState;
    case RECEIVE_USER:
      const currentStory = state.currentStory;
      const authorId = currentStory.author.id;
      currentStory.author = action.user[authorId];
      const newStories = {currentStory: currentStory};
      return Object.assign({}, newState, state, newStories);

    default:
      return state;
  }
};

export default storyReducer;












//
