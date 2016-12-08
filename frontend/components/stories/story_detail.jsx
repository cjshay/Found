import React from 'react';

class StoryDetail extends React.Component {
  componentDidMount() {
    this.props.fetchStory(this.props.storyId);
  }
  render() {
    if (this.props.story !== undefined) {
      return (
        <ul className="story-item">
          <li className="story-item-title">Current Title</li>
          <li className="story-item-content" >{this.props.story.content}</li>
        </ul>
      );

    } else {
      return(<div>Loading...</div>);
    }
  }
}

export default StoryDetail;
