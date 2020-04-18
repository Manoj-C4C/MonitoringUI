import React, { Component } from 'react';
import './Login.scss';
import {
  Form,
  TextInput,
  Button,
  Checkbox,
  Tile,
  SwitcherDivider
} from "carbon-components-react";
import health_logo from '../../assets/images/health.svg';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import { postapi } from '../../services/webservices';

class Login extends Component {

  constructor(props) {
    super(props);
  }

  signinBtn = () => {
    this.props.history.push('/');
    /*const reqObj = {
      "username":"480900901",
      "password":"medicsdsdine"
    };
    return postapi('login', reqObj)
    .then(responseJson => {
        console.log('responseJson => ', responseJson.responseCode);
    })*/
  }

  render() {

    const TextInputProps = {
      className: 'text-field-style',
      id: 'username',
      labelText: 'Username'
    };
    
    const InvalidPasswordProps = {
      className: 'text-field-style',
      id: 'password',
      labelText: 'Password',
      invalid: false,
      invalidText:
        'Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.',
    };

    const checkboxEvents = {
      className: 'rememberme',
      labelText: 'Remember me',
    };

    return (
      <React.Fragment>
        <Content className="login-container">
          <Tile className="form-container">
            <div className="header-div">
              <img src={health_logo} className="login-logo" alt="logo" />
              <p className="header">COVID-19 Health Assistance</p>
              <span className="sub-header">Please enter your details to monitor patient Health data</span>
            </div>            
            <SwitcherDivider className="divide-line" />
            <Form className="form-style">
              <TextInput {...TextInputProps} />

              <TextInput
                type="password"
                required
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                {...InvalidPasswordProps}
              />

              <Checkbox {...checkboxEvents} id="checkbox-1" />

              <div className="btn-div">
                <Button type="submit" className="signin-btn" onClick={() => { this.signinBtn() }}>
                  <span>Sign In</span>
                </Button>
              </div>
            </Form>
          </Tile>
          <p className="forgot_pwd">Forgot username or password?</p>
        </Content>
      </React.Fragment>
    );
  }
}

export default Login;