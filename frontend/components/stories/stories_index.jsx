import React from 'react';
import { StoryIndexItem } from './story_index_item';

const StoryIndexItems = ({ stories }) => {
  return (<ul>
    { stories.map(story => <StoryIndexItem key={ story.id } story={ story }/>) }
  </ul>
  );
};

class StoriesIndex extends React.Component{
  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    if (this.props.stories === undefined) {
      return (<div>Loading...</div>);
    } else {
      return (
        <section>
          <StoryIndexItems stories={ this.props.stories }/>
        </section>
      );
    }
  }
}

export default StoriesIndex;
