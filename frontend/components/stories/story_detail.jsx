import React from 'react';

class StoryDetail {
  componentDidMount() {
    debugger
    this.props.fetchStory("pathstoryid");
  }
  render() {
    if (this.props.story.author !== undefined) {
      return (
        <ul>
          <li>this.props.story.username</li>
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
