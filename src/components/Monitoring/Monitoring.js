import React, { Component } from 'react';
import './Monitoring.scss';
import {
  Tabs,
  Tab
} from 'carbon-components-react';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import SideMenu from '../SideMenu/SideMenu';
import PatientList from '../PatientList/PatientList';

class Monitoring extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <SideMenu history={this.props.history} />
        <Content>
          <Tabs>
            <Tab id="tab-1" label="COVID-19 +VE" className="tab-list">
              <div className="some-content">
                <PatientList />
              </div>
            </Tab>
            <Tab id="tab-2" label="COVID-19 Possible">
              <div className="some-content">
                <PatientList />
              </div>
            </Tab>
            <Tab id="tab-3" label="All Patients">
              <div className="some-content">
                <PatientList />
              </div>
            </Tab>
          </Tabs>
        </Content>
      </React.Fragment>
    );
  }
}

export default Monitoring;