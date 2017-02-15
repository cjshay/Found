import React from 'react';
import { Link } from 'react-router';


class UpdateStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      imageFile: "",
      imageUrl: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.fetchStory(this.props.storyId)
    .then(() => this.setState({content: this.props.story.content}))
    .then(() => $('body').scrollTop(0));
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
    this.props.updateStory(formData, this.props.story.id)
    .then(() => {
      if (this.props.story.parent_id) {
        return this.props.router.push(`/story/${this.props.story.parent_id}`);
      }
      return this.props.router.push(`/story/${this.props.story.id}`);
    });

  }

  update(property) {
    return event => this.setState({ [property]: event.target.value});
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

  render() {
    let previewToggle = "update-img-preview";
    return (
      <main className="update-story">
        <section className="update-image-container">
          <div className="update-image-area">
            <input id="update-image-file-input"
              type="file"
              onChange={ this.updateFile }>
            </input>
            <img className={previewToggle} src={ this.state.imageUrl }/>
          </div>
        </section>
        <textarea
          value={this.state.content}
          onChange={this.update('content')}></textarea>
        <button onClick={this.handleSubmit}>Publish</button>
      </main>
    );

  }


}

export default UpdateStory;
