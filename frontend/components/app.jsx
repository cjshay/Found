import React from 'react';
import SessionFormContainer from './session_form_container';
import GreetingContainer from './greeting_container';

const App = ({ children }) => {
  return (
    <div>
      <h1>Medium</h1>
      <GreetingContainer />
      { children }
    </div>
  );
};

export default App;
