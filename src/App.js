import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.scss';
import Monitoring from './components/Monitoring/Monitoring';
import Login from './components/Login/Login';
import HelpCenter from './components/HelpCenter/HelpCenter';
import Settings from './components/Settings/Settings';

class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Monitoring} />
        <Route exact path='/help' component={HelpCenter} />
        <Route exact path='/settings' component={Settings} />
      </Switch>
    </Router>
    );
  }
}

export default App;
