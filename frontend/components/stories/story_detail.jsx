import React from 'react';

class StoryDetail extends React.Component {
  componentDidMount() {
    this.props.fetchStory(this.props.storyId);
  }
  render() {
    if (this.props.story !== undefined) {
      return (
        <ul>
          <li>{this.props.story.author.username}</li>
          <li>user description</li>
          <li>{this.props.story.title}</li>
          <li>{this.props.story.content}</li>
        </ul>
      );

    } else {
      return(<div>Loading...</div>);
    }
  }
}

export default StoryDetail;
