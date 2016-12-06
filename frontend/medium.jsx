import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';




document.addEventListener('DOMContentLoaded', () => {
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    window.store = configureStore(preloadedState);
  } else {
    window.store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ window.store }/>, root);
});
