import React from 'react';

class CreateStoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      imageFile: "",
      imageUrl: ""
    };
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    const story = Object.assign({}, this.state);
    if (this.props.parentId !== undefined) {
      story.parentId = this.props.parentId;
    }
    this.props.createStory(story);
    this.setState({title: '', content: '', imageFile: "", imageUrl: ""});

  }
  updateFile(event) {
    let file = event.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  update(property) {
    return event => this.setState({ [property]: event.target.value});
  }

  render () {
    if (this.props.currentUser !== null) {
      return (
        <form className="create-story-form" onSubmit={this.handleSubmit}>
          <span>
            <div>
              <input
                type="file"
                onChange={ this.updateFile }>
              </input>
              <img src={ this.state.imageUrl }/>
              <div>
                <li>0</li>
                <li>Add Image</li>
              </div>
            </div>
          </span>
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
