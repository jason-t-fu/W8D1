import React from 'react';
import { Route } from 'react-router-dom';
import GreetingsContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SearchContainer from './search_container';

const App = () => {
  return (
    <div>
      <header>
        <h1>Bench BnB</h1>
        <GreetingsContainer />
      </header>

      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={ SearchContainer } />
    </div>
  )
}

export default App;