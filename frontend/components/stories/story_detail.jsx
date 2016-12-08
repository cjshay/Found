import React from 'react';

class StoryDetail extends React.Component {
  componentDidMount() {
    this.props.fetchStory(this.props.storyId);
  }
  render() {
    if (this.props.story !== undefined) {
      return (
        <ul className="story-detail">
          <li className="story-detail-title">{this.props.story.title}</li>
          <li className="story-detail-content" >{this.props.story.content}</li>
        </ul>
      );

    } else {
      return(<div>Loading...</div>);
    }
  }
}

export default StoryDetail;
