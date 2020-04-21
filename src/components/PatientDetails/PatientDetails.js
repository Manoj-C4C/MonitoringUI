import React from "react";
import moment from "moment";
import "./PatientDetails.scss";
import {
  ChevronLeft20,
  TemperatureHot20,
  Favorite20,
  Information20,
  CircleFilled20,
  ArrowRight20,
  NotebookReference20,
  PillsSubtract20,
  Calendar20
} from "@carbon/icons-react";
import {
  TextArea,
  Loading,
  Modal,
  Dropdown,
  Button,
  InlineNotification,
  Tile
} from "carbon-components-react";
import { LineChart } from "@carbon/charts-react";
import { getapi, postapi, putapi } from "../../services/webservices";
import { Link } from "react-router-dom";
import "@carbon/charts/styles.css";

class PatientDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: 1,
      userDetail: {},
      modal: false,
      patient: {},
      assigned: false,
      isNotificationOpen: false,
      dataLoader: true,
      comment: "",
      notificationText: '',
      doctorList: [],
      commentsList: [],
      data: [
        {
          group: "Dataset 1",
          date: "2020-04-01T18:30:00.000Z",
          value: 96
        },
        {
          group: "Dataset 1",
          date: "2020-04-02T18:30:00.000Z",
          value: 95
        },
        {
          group: "Dataset 1",
          date: "2020-04-03T18:30:00.000Z",
          value: 98
        },
        {
          group: "Dataset 1",
          date: "2020-04-04T18:30:00.000Z",
          value: 99
        },
        {
          group: "Dataset 1",
          date: "2020-04-05T18:30:00.000Z",
          value: 100
        },
        {
          group: "Dataset 1",
          date: "2020-04-06T18:30:00.000Z",
          value: 102
        },
        {
          group: "Dataset 1",
          date: "2020-04-07T18:30:00.000Z",
          value: 105
        }
      ],
      options: {
        title: "",
        axes: {
          bottom: {
            title: "",
            mapsTo: "date",
            scaleType: "time"
          },
          left: {
            mapsTo: "value",
            title: "",
            scaleType: "linear"
          }
        },
        curve: "curveMonotoneX",
        height: "177px"
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.getCommentList();
    this.getDoctors();
    if (localStorage.getItem("user_details")) {
      const user_details = JSON.parse(localStorage.getItem("user_details"));
      this.setState({ userType: user_details.usertype === "doctor" ? 1 : 2 });
      this.setState({ userDetail: user_details });
    }

    const endpoint = `patients/${this.props.id}`;
    return getapi(endpoint).then(responseJson => {
      this.setState({ dataLoader: false });
      if (responseJson.docs) {
        this.setState({ patient: responseJson.docs[0] });
      }
    });
  }

  getDoctors() {
    const endpoint = `doctors`;
    return getapi(endpoint).then(responseJson => {
      if (responseJson.responseCode !== "ERROR") {
        this.setState({ doctorList: responseJson.docs });
      }
    });
  }

  getCommentList() {
    const endpoint = `patients/comment/${this.props.id}`;
    return getapi(endpoint).then(responseJson => {
      if (responseJson.responseCode !== "ERROR") {
        this.setState({ commentsList: responseJson.docs[0].doctorscreening });
      }
    });
  }

  commentClk() {
    const endpoint = `patients/comment/${this.props.id}`;
    const reqObj = {
      comment: this.state.comment,
      timestamp: new Date().getTime(),
      doctor: this.state.userDetail.name
    };
    return postapi(endpoint, reqObj).then(responseJson => {
      if (responseJson.responseCode !== "ERROR") {
        this.setState({ comment: "" });
        this.getCommentList();
      }
    });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  generateTimeFormat(timestamp) {
    return moment(Number(timestamp)).format("h:mm a, DD MMM YYYY");
  }

  assign(val, event) {
    const endpoint = `patients/assign-doctor/${this.props.id}`;
    const reqObj = {
      doctorId: val._id,
      operatorId: this.state.userDetail.id,
      timestamp: new Date().getTime(),
      operatorName: this.state.userDetail.name
    };

    return putapi(endpoint, reqObj).then(responseJson => {
      if (responseJson.responseCode !== "ERROR") {
        const { patient } = this.state;
        patient.doctorId = val._id;
        this.setState({ assigned: true, isNotificationOpen: true, patient: patient,
          notificationText: `Dr. ${val.name} is assigned to ${patient.name}.` });
      }
    });
  }
  selection(event) {
    if (event.selectedItem.text === "Doctor") {
      this.setState({ modal: true, assigned: false });
    }
  }
  close() {
    this.setState({ modal: false });
  }
  notificationClose() {
    this.setState({ isNotificationOpen: false });
  }

  render() {
    const { userType, doctorList, modal, isNotificationOpen } = this.state;
    const items = userType === 1 ? [
      {
        id: "option-2",
        text: "Hospital Emergency"
      },
      {
        id: "option-3",
        text: "Hospital Admission"
      },
      {
        id: "option-4",
        text: "Psychologist (Counseling)"
      }
    ] : [
      {
        id: "option-1",
        text: "Doctor"
      },
      {
        id: "option-2",
        text: "Hospital Emergency"
      },
      {
        id: "option-4",
        text: "Psychologist (Counseling)"
      }
    ]
    
    const props = () => ({
      active: true,
      withOverlay: false,
      small: false
    });
    const { patient, dataLoader, comment, commentsList, notificationText } = this.state;
    const modalprops = () => ({
      className: "some-class",
      open: true,
      passiveModal: true,
      modalHeading: (isNotificationOpen ? <InlineNotification {...notificationProps()} /> : '' +"Select Doctor"),
      onRequestClose: this.close.bind(this)
    });
    const notificationProps = () => ({
      kind: 'success',
      lowContrast: false,
      title: `${notificationText}`,
      hideCloseButton: false,
      onCloseButtonClick: this.notificationClose.bind(this)
    });

    return (
      <React.Fragment>
        {modal ? 
          <Modal {...modalprops()}>
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
                          {(patient.doctorId && patient.doctorId === val._id) ? (
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
          </Modal> : null
        }
        {dataLoader ? (
          <div className="loader-style">
            <Loading {...props()} />
          </div>
        ) : (
          <div className="some-content">
            <div className="mainbox">
              <div className="navigation">
                <Link to="/dashboard">
                  <ChevronLeft20 /> <span>Back</span>
                </Link>
                <div className="refer">
                  <NotebookReference20 /> <span>Refer to another Hospital</span>
                  <div className="selection">
                    <Dropdown
                      items={items}
                      id="dropdown-search"
                      name="dropdown"
                      label="Assign to"
                      onChange={this.selection.bind(this)}
                      className="dropdown-search"
                      itemToString={item => (item ? item.text : "")}
                    />
                  </div>
                </div>
              </div>
              <div className="maincover">
                {patient.qurantine && patient.qurantine.isQurantine ? (
                  <div className="homeqstatus">Home Quarantine</div>
                ) : null}
                <div className="header">
                  <div className="namenid">
                    <div
                      className={`name ${
                        patient.healthstatus === "positive"
                          ? "red-color"
                          : patient.healthstatus === "possible"
                          ? "yellow-color"
                          : "green-color"
                      }`}
                    >
                      {patient.name}
                    </div>
                    <div className="id">{patient._id}</div>
                  </div>
                  <div className="tabdesc">
                    <div className="desc">
                      <div className="desctitle">Gender</div>
                      <div className="descdetail">{patient.gender}</div>
                    </div>
                    <div className="desc">
                      <div className="desctitle">Age</div>
                      <div className="descdetail">{patient.age} years</div>
                    </div>
                    <div className="desc travel">
                      <div className="desctitle">Travel History</div>
                      <div className="descdetail">Italy</div>
                    </div>
                    <div className="desc test">
                      <div className="desctitle">COVID-19 Status</div>
                      <div className="descdetail">Positive, on 10 Apr 2020</div>
                    </div>
                    <div className="desc travel">
                      <div className="desctitle">Other Disease</div>
                      <div className="descdetail">Diabetes</div>
                    </div>
                    <div className="desc">
                      <div className="desctitle">Location</div>
                      <div className="descdetail">Roseville, CA</div>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="detail">
                  <div className="charts">
                    <div className="head">Health Status</div>
                    <Tile className="symptom-card">
                      <div className="bx--row row-padding">
                        <PillsSubtract20 />
                        <span className="icon-label">Symptoms</span>
                      </div>
                      <div className="bx--row row-padding medicine-containers">
                        <div className="text-container">
                          <span className="text-label">Fever</span>
                        </div>
                        <div className="text-container">
                          <span className="text-label">Sneezing & Dry Cough</span>
                        </div>
                        <div className="text-container">
                          <span className="text-label">Breathing issues</span>
                        </div>
                      </div>
                      <div className="bx--row row-padding">
                        <Calendar20 />
                        <span className="icon-label">
                          Islolation/Quarantine Days
                        </span>
                      </div>
                      <div className="bx--row row-padding">
                        <span className="icon-label web-color">2 days Completed</span>
                        <span className="icon-label">(12 days remaining)</span>
                      </div>
                    </Tile>
                    <div className="chart">
                      <div className="title">
                        <TemperatureHot20 />
                        <span>
                          Body Temprature in{" "}
                          <span className="txtdegree">o</span>C
                        </span>
                      </div>
                      <LineChart
                        data={this.state.data}
                        options={this.state.options}
                      ></LineChart>
                      <div className="bottom">
                        <Information20 />
                        <span>
                          98<span className="txtdegree">o</span>C is normal
                          temprature
                        </span>
                      </div>
                    </div>
                    <div className="chart">
                      <div className="title">
                        <Favorite20 /> <span>Heart Rate</span>
                      </div>
                      <LineChart
                        data={this.state.data}
                        options={this.state.options}
                      ></LineChart>
                      <div className="bottom">
                        <Information20 />
                        <span>Normal heart rate is between 70 and 100 Bpm</span>
                      </div>
                    </div>
                  </div>
                  <div className="timeline">
                    <div className="head">Patient History</div>
                    <div className="timebox">
                      {commentsList.map((value, index) => {
                        return (
                          <div
                            key={index}
                            className={`timeboxdetail ${
                              index !== commentsList.length - 1 ? "bdrl" : ""
                            }`}
                          >
                            <div className="timeicon">
                              <CircleFilled20 />
                            </div>
                            <div className="timedetail">
                              <div className="detail">{value.comment}</div>
                              <div className="time">
                                By {value.doctor} {this.generateTimeFormat(value.timestamp)}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      {userType === 1 ? (
                          <div className="entry">
                            <div className="entrybox">
                              <ArrowRight20
                                onClick={() => {
                                  this.commentClk();
                                }}
                              />
                              <TextArea
                                className="textarea"
                                labelText=""
                                id="comment"
                                value={comment}
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                        ) : null}
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default PatientDetails;