import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//New use of hooks
function SessionForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect( () => {
    if (props.errors.length !== 0) {
      props.clearErrors();
    }
  }, []);

  const handleSubmit = event => {
    event.preventDefault();

    const user = Object.assign({}, {username, password});
    props.processForm(user);
  };

  const formType = props.formType === "login" ? "Log In" : "Sign Up";
  const linkToOtherForm = props.formType === "login" ? 
                          <Link to="/signup">Sign Up</Link> : 
                          <Link to="/login">Log In</Link>;
  const errors = <ul>
                  {props.errors.map( error => {
                    return <li key={error}>{error}</li>
                  })}
                </ul>
  return (
    <div>
      <h2>{formType}</h2>
      {linkToOtherForm}
      {props.errors.length === 0 ? <></> : errors}
      <form onSubmit={handleSubmit}>
        <label>Username: 
          <input type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>Password: 
          <input type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>{formType}</button>
      </form>
    </div>
  );
}

export default SessionForm;

// Old class definition
// import React from 'react';
// import { Link } from 'react-router-dom';

// class SessionForm extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: "",
//       password: ""
//     };
//   }

//   componentDidMount() {
//     this.props.clearErrors();
//   }

//   updateField(fieldName) {
//     return (e) => {
//       this.setState({[fieldName]: e.target.value});
//     };
//   }

//   handleSubmit(e) {
//     e.preventDefault();

//     const user = Object.assign({}, this.state);
//     this.props.processForm(user);
//   }

//   render() {
//     const formType = this.props.formType === "login" ? "Log In" : "Sign Up";
//     const linkToOtherForm = this.props.formType === "login" ? 
//                             <Link to="/signup">Sign Up</Link> : 
//                             <Link to="/login">Log In</Link>;
//     const errors = <ul>
//                     {this.props.errors.map( error => {
//                       return <li>{error}</li>
//                     })}
//                   </ul>
//     return (
//       <div>
//         <h2>{formType}</h2>
//         {linkToOtherForm}
//         {this.props.errors.length === 0 ? <></> : errors}
//         <form onSubmit={(e) => this.handleSubmit(e)}>
//           <label>Username: 
//             <input type="text"
//                    value={this.state.username}
//                    onChange={this.updateField('username')} />
//           </label>
//           <label>Password: 
//             <input type="text"
//                    value={this.state.password}
//                    onChange={this.updateField('password')} />
//           </label>
//           <button>{formType}</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default SessionForm;
