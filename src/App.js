import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import "./index.scss";
import Monitoring from "./components/Monitoring/Monitoring";
import Login from "./components/Login/Login";
import HelpCenter from "./components/HelpCenter/HelpCenter";
import Settings from "./components/Settings/Settings";
import store from './redux/configStore.js'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('user_details') === null
      ? <Redirect to='/login' />
      : <Component {...props} />
  )} />
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path={["/", "/login"]} component={Login} />
            <PrivateRoute path='/dashboard' component={Monitoring} />
            <PrivateRoute
              exact
              path="/patientdetail/:patientid"
              component={Monitoring}
            />
            <PrivateRoute exact path="/help" component={HelpCenter} />
            <PrivateRoute exact path="/settings" component={Settings} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;

