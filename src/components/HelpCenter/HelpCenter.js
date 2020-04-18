import React, { Component } from 'react';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import {
  Tile
} from 'carbon-components-react';
import './HelpCenter.scss';
import SideMenu from '../SideMenu/SideMenu';

class HelpCenter extends Component {
  render() {
    return (
      <React.Fragment>
        <SideMenu history={this.props.history} />
        <Content className="content-block">
          <Tile className="tile-block">
            <p>Help Center Page</p>
          </Tile>
        </Content>
      </React.Fragment>
    );
  }
}

export default HelpCenter;