import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  
  render() {
    const { currentUser, logout } = this.props;
    if (currentUser) {
      return (
        <div>
          <h3>Welcome, {currentUser.username}!</h3>
          <button onClick={() => logout()}>Log Out</button>
        </div>
      );
    }
    else {
      return (
        <div>
          <Link to="/signup" >Sign Up</Link>
          <Link to="/login" >Log In</Link>
        </div>
      );
    };
  };
};

export default Greeting;