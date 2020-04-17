import React, { Component } from 'react';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import SideMenu from '../SideMenu/SideMenu';

class HelpCenter extends Component {
  render() {
    return (
      <React.Fragment>
        <SideMenu history={this.props.history} />
        <Content>
          <p>Help Center Page</p>
        </Content>
      </React.Fragment>
    );
  }
}

export default HelpCenter;