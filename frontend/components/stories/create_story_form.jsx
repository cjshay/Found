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
        <form onSubmit={this.handleSubmit}>
          <label>Create a Story</label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.update('title')}></input>
          <textarea
            value={this.state.content}
            onChange={this.update('content')}></textarea>
          <input type="submit" value="Create Story"></input>
        </form>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default CreateStoryForm;
