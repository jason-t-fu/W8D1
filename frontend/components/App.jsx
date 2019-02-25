import React from 'react';
import GreetingsContainer from './greeting/greeting_container';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';


const App = () => {
  return (
    <div>
      <header>
        <h1>Bench BnB</h1>
        <GreetingsContainer />
      </header>

      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
  )
}

export default App;