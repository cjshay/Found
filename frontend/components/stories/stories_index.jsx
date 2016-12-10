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
     

    console.log("parentId: undefined");
    this.props.fetchStories();
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
