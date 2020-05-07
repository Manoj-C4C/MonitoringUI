import React from "react";
import "./PatientDetails.scss";
import {
  Modal,
  Button,
  Loading,
  InlineNotification
} from "carbon-components-react";
import { getapi, putapi } from "../../services/webservices";

class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      patient: {},
      userDetail: {},
      patientdetail: {},
      assigned: false,
      isNotificationOpen: false,
      dataLoader: true,
      notificationText: "",
      doctorList: [],
      commentsList: []
    };
  }
  componentDidMount() {
    this.getDoctors();
  }

  getDoctors() {
    const endpoint = `doctors`;
    return getapi(endpoint).then(responseJson => {
      if (responseJson.responseCode !== "ERROR") {
        this.setState({ doctorList: responseJson.docs });
      }
      this.setState({ dataLoader: false });
    });
  }
  /**
   * @method assign
   * @param val
   * @param event
   * @description Function to assign doctor to particular patient
   */
  assign(val, event) {
    const endpoint = `patients/assign-doctor/${this.props.id}`;
    const reqObj = {
      doctorId: val._id,
      operatorId: this.props.userDetail.id,
      timestamp: new Date().getTime(),
      operatorName: this.props.userDetail.name
    };

    return putapi(endpoint, reqObj).then(responseJson => {
      if (responseJson.responseCode !== "ERROR") {
        const { patient } = this.props;
        patient.doctorId = val._id;
        this.setState({
          assigned: true,
          isNotificationOpen: true,
          patient: patient,
          notificationText: `Dr. ${val.name} is assigned to ${patient.name}.`
        });
      }
    });
  }

  close() {
    this.props.opendialog({ modal: false, assigned: false });
  }
  notificationClose() {
    this.setState({ isNotificationOpen: false });
  }

  render() {
    const {
      doctorList,
      dataLoader,
      patient,
      notificationText,
      isNotificationOpen
    } = this.state;
    const props = () => ({
      active: true,
      withOverlay: false,
      small: false
    });
    const modalprops = () => ({
      className: "some-class",
      open: true,
      passiveModal: true,
      modalHeading: isNotificationOpen ? (
        <InlineNotification {...notificationProps()} />
      ) : (
        "" + "Select Doctor"
      ),
      onRequestClose: this.close.bind(this)
    });
    const notificationProps = () => ({
      kind: "success",
      lowContrast: false,
      title: `${notificationText}`,
      hideCloseButton: false,
      onCloseButtonClick: this.notificationClose.bind(this)
    });

    return (
      <React.Fragment>
        {this.props.modal ? (
          <Modal {...modalprops()}>
            {dataLoader ? (
              <div className="loader-style">
                <Loading {...props()} />
              </div>
            ) : (
              <div className="datatable">
                <div className="header">
                  <div className="unit">Doctor ID</div>
                  <div className="unit">Doctor name</div>
                  <div className="unit">Action</div>
                  <div className="clearfix"></div>
                </div>
                <div className="datarow">
                  {doctorList.length > 0 &&
                    doctorList.map((val, key) => {
                      return (
                        <div key={key} className="row">
                          <div className="unit">{val._id}</div>
                          <div className="unit">{val.name}</div>
                          <div className="unit">
                            {patient.doctorId &&
                            patient.doctorId === val._id ? (
                              <Button className="assignbtn disable" disabled>
                                Assign
                              </Button>
                            ) : (
                              <Button
                                onClick={this.assign.bind(this, val)}
                                className="assignbtn"
                              >
                                Assign
                              </Button>
                            )}
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
          </Modal>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Dialog;