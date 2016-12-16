import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form_container';
import StoryDetailContainer from './stories/story_detail_container';
import UserDetailContainer from './users/user_detail_container';
import UpdateStoryFormContainer from './stories/update_story_form_container';
import App from './app';
import { Home } from './home';


const Root = ({ store }) => {
  const _redirectIfSignedIn = (_, replace) => {
    if (store.getState().session.currentUser) {
      replace('/');
    }
  };
  return(
    <Provider store= {store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/signin"
            component={SessionFormContainer}
            onEnter= {_redirectIfSignedIn}/>
          <Route path="/signup"
            component={SessionFormContainer}
            onEnter= {_redirectIfSignedIn}/>
          <Route path="/story/:story_id" component={StoryDetailContainer}/>
          <Route path="/users/:user_id" component={UserDetailContainer}/>
          <Route path="/story/:story_id/edit" component={UpdateStoryFormContainer}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
