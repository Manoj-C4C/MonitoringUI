import React, { Component } from 'react';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import SideMenu from '../SideMenu/SideMenu';

class Settings extends Component {
  render() {
    return (
      <React.Fragment>
        <SideMenu history={this.props.history} />
        <Content>
          <p>Settings page</p>
        </Content>
      </React.Fragment>
    );
  }
}

export default Settings;