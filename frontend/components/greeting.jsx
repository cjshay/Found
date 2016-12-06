import React from 'react';
import { Link } from 'react-router';

export const Greeting = (props) => {
  if (props.currentUser !== null) {
    return (
      <section>
        <h2>Welcome, {props.currentUser.username}!</h2>
        <button onClick= { props.logout }>Log Out</button>
      </section>);
  } else {
    return (
      <section>
        <Link to='/signup'>Signup</Link>
        <Link to='/login'>Login</Link>
      </section>
    );
  }
};
