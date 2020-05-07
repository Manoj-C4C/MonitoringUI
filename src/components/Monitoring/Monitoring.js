import React, { Component } from "react";
import "./Monitoring.scss";
import { Tabs, Tab, Tile } from "carbon-components-react";
import { Content } from "carbon-components-react/lib/components/UIShell";
import SideMenu from "../SideMenu/SideMenu";
import PatientList from "../PatientList/PatientList";
import Dialog from "../PatientDetails/dialog";

class Monitoring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabType: "All",
      sosCount: 0,
      possibleCount: 0,
      modal: false,
      assigned: false
    };
    this.handleSosCount = this.handleSosCount.bind(this);
  }

  /**
   * @method tabClk
   * @param type
   * @description Handle tab click functionality
   */
  tabClk(type) {
    const tabChange = type === this.state.tabType ? false : true;
    if (tabChange) {
      this.setState({ tabType: type });
    }
  }

  /**
   * @method handleSosCount
   * @param {Data to find sos count from list} data
   */
  handleSosCount(data) {
    this.setState({
      sosCount: data.sosCount,
      possibleCount: data.possibleCount
    });
  }
  /**
   * @method opendialog
   * @param {Open the dialog data} data
   */
  opendialog(data) {
    this.setState({
      modal: data.modal,
      assigned: data.assigned,
      id: data.id,
      userDetail: data.userDetail,
      patient: data.patient
    });
  }

  render() {
    const { tabType, sosCount, possibleCount } = this.state;
    return (
      <React.Fragment>
        <SideMenu history={this.props.history} />
        <Content className="content-block">
          <Tile className="tile-block">
            <p className="tabs-header">Patients Dashboard</p>
            <div className="alert_container">
              <span className="alert_label">{sosCount} Morbidity</span>
            </div>
            <div className="possible_pat">
              <span className="possible_pat_label">{possibleCount}</span>
            </div>
            <Tabs className="tabs-style">
              <Tab
                id="tab-1"
                label="All Patients"
                className="tab-list"
                onClick={() => {
                  this.tabClk("All");
                }}
              >
                {tabType === "All" ? (
                  <div className="some-content">
                    <PatientList
                      {...this.props}
                      userStatus={tabType}
                      getSosCount={this.handleSosCount}
                      opendialog={this.opendialog.bind(this)}
                    />
                  </div>
                ) : null}
              </Tab>
              <Tab
                id="tab-2"
                label="High Risk"
                className="tab-list"
                onClick={() => {
                  this.tabClk("Positive");
                }}
              >
                {tabType === "Positive" ? (
                  <div className="some-content">
                    <PatientList
                      {...this.props}
                      userStatus={tabType}
                      getSosCount={this.handleSosCount}
                      opendialog={this.opendialog.bind(this)}
                    />
                  </div>
                ) : null}
              </Tab>
              <Tab
                id="tab-3"
                label="Medium Risk"
                className="tab-list"
                onClick={() => {
                  this.tabClk("Possible");
                }}
              >
                {tabType === "Possible" ? (
                  <div className="some-content">
                    <PatientList
                      {...this.props}
                      userStatus={tabType}
                      getSosCount={this.handleSosCount}
                      opendialog={this.opendialog.bind(this)}
                    />
                  </div>
                ) : null}
              </Tab>
            </Tabs>
          </Tile>
        </Content>
        {this.state.modal && (
          <Dialog
            assigned={this.state.assigned}
            opendialog={this.opendialog.bind(this)}
            modal={this.state.modal}
            userDetail={this.state.userDetail}
            patient={this.state.patient}
            id={this.state.id}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Monitoring;