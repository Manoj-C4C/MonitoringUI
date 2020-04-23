import React, { Component } from 'react';
import './Login.scss';
import {
  Form,
  TextInput,
  Button,
  Checkbox,
  Tile,
  SwitcherDivider,
  Loading
} from "carbon-components-react";
import health_logo from '../../assets/images/health.svg';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import { postapi } from '../../services/webservices';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      dataLoader: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.signinBtn = this.signinBtn.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  signinBtn = (event) => {
    event.preventDefault();
    this.setState({dataLoader: true});
    const { username, password } = this.state;
    const reqObj = {
      "username": username,
      "password": password
    };
    return postapi('login', reqObj)
    .then(responseJson => {
      this.setState({dataLoader: false});
      if(responseJson.responseCode !== 'ERROR') {
        const userData = JSON.stringify({
          id: responseJson._id,
          name: responseJson.name, 
          usertype: responseJson.usertype
        });
        localStorage.setItem('user_details', userData);
        this.props.history.push('/dashboard');
      }
    })
  }

  render() {
    const { username, password, dataLoader } = this.state;

    const TextInputProps = {
      className: 'text-field-style',
      id: 'username',
      labelText: 'Username'
    };
    
    const InvalidPasswordProps = {
      className: 'text-field-style',
      id: 'password',
      labelText: 'Password'
    };

    const checkboxEvents = {
      className: 'rememberme',
      labelText: 'Remember me',
    };

    const props = () => ({
      active: true,
      withOverlay: true,
      small: false
    });

    return (
      <React.Fragment>
        <Content className="login-container">
          {dataLoader ? <Loading {...props()} className='loader-login' /> : null}
          <Tile className="form-container">
            <div className="header-div">
              <img src={health_logo} className="login-logo" alt="logo" />
              <p className="header">COVID-19 Health Assistance</p>
              <span className="sub-header">Please enter your details to monitor patient Health data</span>
            </div>            
            <SwitcherDivider className="divide-line" />
            <Form className="form-style">
              <TextInput {...TextInputProps} value={username} onChange={this.handleChange} />

              <TextInput
                type="password"
                required
                {...InvalidPasswordProps}
                value={password}
                onChange={this.handleChange}
              />

              <Checkbox {...checkboxEvents} id="checkbox-1" />

              <div className="btn-div">
                <Button type="submit" className="signin-btn" disabled={username === '' || password === ''} onClick={this.signinBtn}>
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