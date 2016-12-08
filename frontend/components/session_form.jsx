import React from 'react';
// import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return event => this.setState({ [property]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.router.push('/'));
  }

  render() {
    if (this.props.formType === 'signin') {
      return (
        <div className="auth">
          <h3>Sign In to Medium</h3>

          <form className="auth-form" onSubmit={this.handleSubmit}>
            <label>Username
              <input
                type="text"
                value={this.state.username}
                placeholder="username"
                onChange={this.update('username')} />
            </label>
            <label>Password
              <input
                type="password"
                value={this.state.password}
                placeholder="password"
                onChange={this.update('password')} />
            </label>
            <p>{ this.props.errors[0] }</p>
            <input type="submit" value="Signin"/>
          </form>
        </div>
      );
    } else if (this.props.formType === 'signup') {
      return (
        <div className="auth">
          <h3>Create an account on Medium</h3>

          <form className="auth-form" onSubmit={this.handleSubmit}>
            <label>Username
              <input type="text" placeholder="username" onChange={this.update('username')}/>
            </label>
            <label>Password
              <input type="password" placeholder="password" onChange={this.update('password')} />
            </label>
            <p>{ this.props.errors[0] }</p>
            <input type="submit" value="Signup"/>
          </form>

        </div>
      );
      }
  }

}

export default SessionForm;
