import CreateStoryFormContainer from './stories/create_story_form_container';
import StoriesIndexContainer from './stories/stories_index_container';
import React from 'react';


export const Home = (props) => {
  return(
    <main>
      <CreateStoryFormContainer />
      <StoriesIndexContainer />

    </main>
  );
};
