import React from 'react';
import { Link } from 'react-router';

export const Greeting = (props) => {
  if (props.currentUser !== null) {
    return (
      <section>
        <h2>Welcome, {props.currentUser.username}!</h2>
        <button onClick= { props.signout }>Sign Out</button>
      </section>);
  } else {
    return (
      <section>
        <Link to='/signup'>Signup</Link>
        <Link to='/signin'>Signin</Link>
      </section>
    );
  }
};
