import React from 'react';

class EditUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {username: '', description: '', imageUrl: '', imageFile: ''};

    this.update = this.update.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }
  componentDidMount() {
    if (this.props.user === undefined) {
      this.props.fetchUser(this.props.userId);
    }
  }

  update(property) {
    return event => this.setState({[property]: event.target.value});
  }
  updateUser() {
    this.props.upateUser(this.state);
  }

  render() {
    return (
      <article>
        <section>
          <div>
            <input></input>
            <img></img>
          </div>
        </section>
        <input value={this.state.description} onChange={this.update('username')}></input>
        <input value={this.state.description} onChange={this.update('description')}></input>
        <button onClick={this.updateUser}>Save Changes</button>
      </article>
    );
  }

}

export default EditUser;
