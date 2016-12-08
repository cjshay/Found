import React from 'react';
import { Link } from 'react-router';

const MainHeaderNav = (props) => {
  if (props.currentUser !== null) {
    return (
      <nav className="main-header-nav group logged-in">
        <a href="#">Write a story</a>
        <a href="#">S</a>
        <a href="#">B</a>
        <a href="#">{ props.currentUser.username }</a>
        <a href="#" className="main-header-nav-other" onClick= { props.signout }>Sign out</a>
      </nav>
    );
  } else {
    return (
      <nav className="main-header-nav group not-logged-in">
        <a href="#">Write a story</a>
        <Link to='/signup' id="signup">Signup</Link>
        <p id="slash">/</p>
        <Link to='/signin' id="signin">Signin</Link>
      </nav>
    );

  }
};

export const Greeting = (props) => {
  return (
    <section className="section-header group">
      <header className="main-header group">
        <ul className="main-header-rep group">
          <li><a href="#">M</a></li>
          <li><a href="#">Medium</a></li>
        </ul>

        <MainHeaderNav currentUser={props.currentUser}/>
      </header>

      <nav className="story-nav group">
        <Link to='/'>For You</Link>
        <Link to='/'>Editor's Picks</Link>
        <Link to='/'>Humor</Link>
        <Link to='/'>Top Stories</Link>
      </nav>

    </section>
  );
};
