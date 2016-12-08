import React from 'react';

class CreateStoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    const story = Object.assign({}, this.state);
    this.props.createStory(story);
    this.setState({title: '', content: ''});

  }

  update(property) {
    return event => this.setState({ [property]: event.target.value});
  }

  render () {
    if (this.props.currentUser !== null) {
      return (
        <form className="create-story-form" onSubmit={this.handleSubmit}>
          <p>{this.props.currentUser.username}</p>
          <textarea
            value={this.state.content}
            placeholder="Write Here..."
            onChange={this.update('content')}></textarea>
          <input type="submit" value="Publish"></input>
        </form>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default CreateStoryForm;
