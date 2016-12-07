import React from 'react';
import SessionFormContainer from './session_form_container';
import GreetingContainer from './greeting_container';

const App = ({ children }) => {
  return (
    <section>
      <GreetingContainer />
      { children }
    </section>
  );
};

export default App;
