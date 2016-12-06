import { Router, Route, hashHistory } from 'react-router';
import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import SessionFormContainer from './session_form_container';


const Root = ({ store }) => {
  const _redirectIfLoggedIn = (_, replace) => {
    if (store.getState().session.currentUser) {
      replace('/');
    }
  };
  return(
    <Provider store= { store }>
      <Router history={ hashHistory }>
        <Route path="/" component={App}>
          <Route path="/login"
            component={ SessionFormContainer }
            onEnter= { _redirectIfLoggedIn }/>
          <Route path="/signup"
            component={ SessionFormContainer }
            onEnter= { _redirectIfLoggedIn }/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
