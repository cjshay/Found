import React from 'react';
import CreateStoryFormContainer from './create_story_form_container';
import ResponsesIndexContainer from './responses_index_container';


class StoryDetail extends React.Component {
  componentDidMount() {

    this.props.fetchStory(this.props.storyId);
  }
  render() {



    if (this.props.story !== undefined) {
      return (
        <main>
          <ul className="story-detail">
            <li className="story-detail-title">{this.props.story.title}</li>
            <li className="story-detail-content" >{this.props.story.content}</li>
          </ul>
          <section className= "response-section group">
            <CreateStoryFormContainer parentId={this.props.storyId}/>
            <ResponsesIndexContainer parentId={this.props.storyId}/>
          </section>
        </main>
      );
    } else {
      return (<div>Load</div>);
    }
  }
}


export default StoryDetail;
