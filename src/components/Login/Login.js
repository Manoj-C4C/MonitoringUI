import React, { Component } from 'react';
import './Login.scss';
import {
  Form,
  TextInput,
  Button,
  FormLabel
} from "carbon-components-react";

class Login extends Component {

  constructor(props) {
    super(props);
  }

  signinBtn = () => {
    this.props.history.push('/');
  }

  render() {

    const TextInputProps = {
      className: 'text-field-style',
      id: 'username',
      labelText: 'User Name',
      placeholder: 'User Name',
    };
    
    const InvalidPasswordProps = {
      className: 'text-field-style',
      id: 'password',
      labelText: 'Password !',
      invalid: false,
      invalidText:
        'Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.',
    };

    return (
      <React.Fragment>
        <div className="top-section">
          <p className="header">COVID-19</p>
          <p className="sub-header">Health Dashboard</p>
        </div>
        <div className="bottom-section">
          <Form className="form-style">
            <TextInput {...TextInputProps} />

            <TextInput
              type="password"
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              {...InvalidPasswordProps}
            />

            <FormLabel className="forgot_pwd">Forgot user name or password?</FormLabel>

            <Button type="submit" className="signin-btn" onClick={() => { this.signinBtn() }}>
              <span>SIGN IN</span>
            </Button>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;