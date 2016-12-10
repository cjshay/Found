import {
  RECEIVE_STORIES,
  RECEIVE_STORY,
  RECEIVE_STORY_ERRORS }
  from '../actions/story_actions';
import { merge } from 'lodash';


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
    id: defaultStory
  }
};


const storyReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = {};
  switch(action.type) {
    case RECEIVE_STORIES:
      const stories = merge({}, newState, state, action.stories);
      return stories;
    case RECEIVE_STORY:
      const stateStories = merge({}, newState, state, action.stories);
      return stateStories;
    case RECEIVE_STORY_ERRORS:
      const errors = {errors: action.errors};
      newState = merge({}, state, errors);
      return newState;
    default:
      return state;
  }
};

export default storyReducer;












//
