import React from 'react';
import { Link } from 'react-router';

export const Greeting = (props) => {
  if (props.currentUser !== null) {
    return (
      <section className="section-header group">
        <header className="main-header group">
          <ul className="main-header-rep group">
            <li>M</li>
            <li>Medium</li>
          </ul>

          <nav className="main-header-nav group">
            <a href="#">Write a story</a>
            <a href="#">S</a>
            <a href="#">B</a>
            <a>{ props.currentUser.username }</a>
            <button className="main-header-nav-other" onClick= { props.signout }>Sign out</button>
          </nav>
        </header>

        <nav className="story-nav group">
          <a href="#">For You</a>
          <a href="#">Editor's Picks</a>
          <a href="#">Humor</a>
          <a href="#">Top stories</a>
        </nav>


      </section>
    );
  } else {
    return (
      <section className="section-header group">
        <header className="main-header group">
          <ul className="main-header-rep group">
            <li>M</li>
            <li>Medium</li>
          </ul>

          <nav className="main-header-nav group">
            <a href="#">Write a story</a>
            <a href="#">S</a>
            <a href="#">B</a>
            <Link className="main-header-nav-other" to='/signup'>Signup</Link>
            <Link className="main-header-nav-other" to='/signin'>Signin</Link>
          </nav>
        </header>

        <nav className="story-nav group">
          <a href="#">For You</a>
          <a href="#">Editor's Picks</a>
          <a href="#">Humor</a>
          <a href="#">Top stories</a>
        </nav>


      </section>
    );
  }
};
