import React from 'react';
import { StoryIndexItem } from './story_index_item';

const StoryIndexItems = ({ stories }) => {
  return (<ul>
    { stories.reverse().map(story => <StoryIndexItem key={ story.id } story={ story }/>) }
  </ul>
  );
};

class StoriesIndex extends React.Component{
  componentDidMount() {
    debugger
    if (this.props.storyId !== undefined) {
      this.props.fetchStory(this.props.storyId);
    } else if (this.props.parentId === undefined) {
      console.log("parentId: undefined");
      this.props.fetchStories();
    } else {
      this.props.fetchResponses(this.props.parentId);
    }
  }

  render() {
    if (this.props.stories === undefined || this.props.stories.length === 0) {
      return (<div>Loading...</div>);
    } else {
      return (
        <section className="main-content-stories">
          <StoryIndexItems stories={ this.props.stories }/>
        </section>
      );
    }
  }
}

export default StoriesIndex;
