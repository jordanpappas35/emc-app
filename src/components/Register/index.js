import * as ROUTES from '../../constants/routes';
import { FirebaseContext } from '../Firebase';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const INITIAL_FORM_STATE = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  error: null,
};

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_FORM_STATE };
  }

  _onSubmit = event => {
    const { username, email, password } = this.state;

    this.props.firebase.registerUser(email, password)
      .then( () => { this.setState({ ...INITIAL_FORM_STATE }); alert('success!'); })
      .catch( error => this.setState({ error }) );

    event.preventDefault();
  }

  _onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { username, email, password, confirmPassword, error } = this.state;

    const isValidated = (
      password === confirmPassword
      && password.length > 5
      && email.length > 0
      && username.length > 0
    );

    return (
      <form method="POST" onSubmit={this._onSubmit} onChange={this._onChange}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={this._onChange}
          placeholder="Full Name" />

        <input
          type="text"
          name="email"
          value={email}
          onChange={this._onChange}
          placeholder="Email address" />

        <input
          type="password"
          name="password"
          value={password}
          onChange={this._onChange}
          placeholder="Password" />

        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={this._onChange}
          placeholder="Confirm Password" />

        <button type="submit" disabled={!isValidated}>Register</button>
        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const RegisterLink = () => <Link to={ROUTES.REGISTER}>New Account</Link>

const RegisterView = () =>
  <div>
    <h1>Register</h1>
    <FirebaseContext.Consumer>
      { firebase => <RegisterForm firebase={firebase} /> }
    </FirebaseContext.Consumer>
  </div>

export default RegisterView;
export { RegisterForm, RegisterLink };
