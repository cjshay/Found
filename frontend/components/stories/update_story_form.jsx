import React from 'react';
import { Link } from 'react-router';


class UpdateStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: ''};
    this.updateContent = this.updateContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateContent() {
    return event => this.setState({ content: event.target.value});
  }

  componentDidMount() {
    this.props.fetchStory(this.props.storyId)
    .then(() => this.setState({content: this.props.story.content}));
  }

  handleSubmit() {
    debugger
    const story = Object.assign({}, this.props.story, this.state);
    this.props.updateStory(story)
    .then(() => this.props.router.push(`/users/${this.props.currentUser.id}`));
  }

  render() {
    return (
      <main className="update-story">
        <textarea
          value={this.state.content}
          onChange={this.updateContent()}></textarea>
        <button onClick={this.handleSubmit}>Publish</button>
      </main>
    );

  }


}

export default UpdateStory;
