import React from 'react';
import CreateStoryFormContainer from './create_story_form_container';
import StoriesIndexContainer from './stories_index_container';

class StoryDetail extends React.Component {
  componentDidMount() {
    debugger
    this.props.fetchStory(this.props.storyId);
  }
  render() {
    debugger
    if (this.props.story !== undefined) {

      return (
        <main>
          <ul className="story-detail">
            <li className="story-detail-title">{this.props.story.title}</li>
            <li className="story-detail-content" >{this.props.story.content}</li>
          </ul>
          <h2>Make a Response</h2>
          <section>
            <CreateStoryFormContainer parentId={this.props.storyId}/>
            <StoriesIndexContainer parentId={this.props.storyId}/>
          </section>
        </main>
      );
    } else {
      return (<div>Load</div>);
    }
  }
}


export default StoryDetail;
