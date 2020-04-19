import React, { Component } from "react";
import "./Monitoring.scss";
import { Tabs, Tab, Tile } from "carbon-components-react";
import { Content } from "carbon-components-react/lib/components/UIShell";
import SideMenu from "../SideMenu/SideMenu";
import PatientList from "../PatientList/PatientList";

class Monitoring extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <SideMenu history={this.props.history} />
        <Content className="content-block">
          <Tile className="tile-block">
            <p className="tabs-header">Patients Dashboard</p>
            <Tabs className="tabs-style">
              <Tab id="tab-1" label="All Patients" className="tab-list">
                <div className="some-content">
                  <PatientList {...this.props} />
                </div>
              </Tab>
              <Tab id="tab-2" label="COVID-19 +VE" className="tab-list">
                <div className="some-content">
                  <PatientList />
                </div>
              </Tab>
              <Tab id="tab-3" label="COVID-19 Possible" className="tab-list">
                <div className="some-content">
                  <PatientList />
                </div>
              </Tab>
            </Tabs>
          </Tile>
        </Content>
      </React.Fragment>
    );
  }
}

export default Monitoring;
