import React from 'react';
import CreateStoryFormContainer from './create_story_form_container';
import StoriesIndexContainer from './stories_index_container';

class StoryDetail extends React.Component {

  render() {
    debugger

    return (
      <main>
          <StoriesIndexContainer storyId={this.props.storyId}/>
          <h2>Make a Response</h2>
          <section>
            <CreateStoryFormContainer parentId={this.props.storyId}/>
            <StoriesIndexContainer parentId={this.props.storyId}/>
          </section>
      </main>
    );
  }
}


export default StoryDetail;
