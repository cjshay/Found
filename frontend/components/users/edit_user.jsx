import React from 'react';

class EditUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {username: '', description: '', imageUrl: '', imageFile: ''};

    this.update = this.update.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }
  componentDidMount() {
    this.setState({
      username: this.props.user.username,
      description: this.props.user.description,
      imageUrl: this.props.user.image_url});
  }
  update(property) {
    return event => this.setState({[property]: event.target.value});
  }

  updateUser() {
    const user = Object.assign({}, this.props.user, this.state);
    this.props.updateUser(user)
    .then(this.setState({username: '', description:''}));
  }

  render() {
      return (
        <article>
          <section>
            <div>
              <img className="user-detail-image" src={ this.props.user.image_url }/>

            </div>
          </section>
          <input value={this.state.username} onChange={this.update('username')}></input>
          <input value={this.state.description} onChange={this.update('description')}></input>
          <button onClick={this.updateUser}>Save Changes</button>
        </article>
      );
  }

}

export default EditUser;
