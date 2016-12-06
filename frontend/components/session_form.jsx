import React from 'react';
import { Link } from 'react-router';

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
        <div class="auth">
          <header>Sign In</header>

          <form class="auth-form" onSubmit={this.handleSubmit}>
            <label>Username
              <input type="text" name="user[username]" placeholder="your username" onChange={this.update('username')} />
            </label>
            <label>Password
              <input type="password" name="user[password]" placeholder="your password" onChange={this.update('password')} />
            </label>
            <input type="submit" value="Signin"/>
          </form>
          <p>{ this.props.errors[0] }</p>
          <button>
            <Link to='/signup'>Signup</Link>
          </button>
        </div>
      );
    } else if (this.props.formType === 'signup') {
      return (
        <div class="auth">
          <header>Sign In</header>

          <form class="auth-form" onSubmit={this.handleSubmit}>
            <label>Username
              <input type="text" name="user[username]" onChange={this.update('username')}/>
            </label>
            <label>Password
              <input type="password" name="user[password]" onChange={this.update('password')} />
            </label>
            <input type="submit" value="Signup"/>
          </form>

          <p>{ this.errors }</p>

          <button>
            <Link to='/signin'>Signin</Link>
          </button>
        </div>
      );
      }
  }

}

export default SessionForm;
