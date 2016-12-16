import React from 'react';
import {Link} from 'react-router';

class CreateStoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    let formData = new FormData();
    formData.append("story[title]", this.state.title);
    formData.append("story[content]", this.state.content);
    formData.append("story[image]", this.state.imageFile);
    if (this.props.parentId !== undefined) {
      formData.append("story[parentId]", this.props.parentId);
      formData.append("story[parent_id]", this.props.parentId);
    }
    this.props.createStory(formData);
    this.setState({title: '', content: '', imageFile: "", imageUrl: ""});

  }

  update(property) {
    return event => this.setState({ [property]: event.target.value});
  }

  render () {
    if (this.props.currentUser !== null) {
      return (
          <form className="create-story-form" onSubmit={this.handleSubmit}>
            <p><Link to={"/users/" + this.props.currentUser.id}>{this.props.currentUser.username}</Link></p>
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
