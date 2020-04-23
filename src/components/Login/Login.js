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
import { ArrowRight16, View16 } from '@carbon/icons-react';
import { postapi } from '../../services/webservices';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      pwdType: 'password',
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

  pwdView() {
    this.setState({
      pwdType: this.state.pwdType === 'password' ? 'text' : 'password'
    })
    
  }

  render() {
    const { username, password, dataLoader, pwdType } = this.state;

    const TextInputProps = {
      className: 'text-field-style',
      id: 'username',
      labelText: 'Username'
    };
    
    const InvalidPasswordProps = {
      className: 'text-field-style',
      id: 'password',
      labelText: 'Password',
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
            <Form className="form-style">
              <TextInput {...TextInputProps} value={username} onChange={this.handleChange} />

              <div className="pwd-style">
                <TextInput
                  type={pwdType}
                  required
                  {...InvalidPasswordProps}
                  value={password}
                  onChange={this.handleChange}
                />
                <View16 className="pwd-view" onClick={this.pwdView.bind(this)} />
              </div>

              <Checkbox {...checkboxEvents} id="checkbox-1" />

              <div className="button-div">
                <Button kind="secondary" className="secondary-div">
                  <span>Forgot username or password?</span>
                </Button>
                <Button kind="primary" className="primary-div" type="submit" disabled={username === '' || password === ''} onClick={this.signinBtn}>
                  Log In
                  <ArrowRight16 className="login-arrow" />
                </Button>
              </div>
            </Form>
          </Tile>
        </Content>
      </React.Fragment>
    );
  }
}

export default Login;