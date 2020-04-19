import React, { Component } from "react";
import "./PatientList.scss";
import { Tile, Dropdown, Search } from "carbon-components-react";
import {
  Location16,
  Warning16,
  Search24,
  Information16
} from "@carbon/icons-react";
import { Link } from "react-router-dom";
import PatientDetails from "../PatientDetails/PatientDetails";

class PatientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: 1,
      patientdetail: false,
      isSearchBoxOpen: false
    };
  }

  searchBtnClick = () => {
    this.setState({ isSearchBoxOpen: true });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      patientdetail:
        nextProps.match &&
        nextProps.match.params &&
        nextProps.match.params.patientid
    };
  }

  render() {
    const userType = this.state.userType;
    const isSearchBoxOpen = this.state.isSearchBoxOpen;
    const patientsList = [
      {
        id: 12344,
        name: "John Doe test 1",
        gender: "Male",
        age: 37,
        travel_history: "China",
        test_result: "Positive",
        address: "497 Evergreen Rd, Roseville, CA 95673",
        last_updated_by: { name: "Mike", time: "12th Jan 2020" },
        isSos: false,
        covid19Status: 2
      },
      {
        id: 12345,
        name: "John Doe 2",
        gender: "Male",
        age: 37,
        travel_history: "China",
        test_result: "Positive",
        address: "497 Evergreen Rd, Roseville, CA 95673",
        last_updated_by: { name: "Mike", time: "12th Jan 2020" },
        isSos: true,
        covid19Status: 3
      },
      {
        id: 12346,
        name: "John Doe 3",
        gender: "Male",
        age: 37,
        travel_history: "China",
        test_result: "Positive",
        address: "497 Evergreen Rd, Roseville, CA 95673",
        last_updated_by: { name: "Mike", time: "12th Jan 2020" },
        isSos: false,
        covid19Status: 1
      },
      {
        id: 12347,
        name: "John Doe 4",
        gender: "Male",
        age: 37,
        travel_history: "China",
        test_result: "Positive",
        address: "497 Evergreen Rd, Roseville, CA 95673",
        last_updated_by: { name: "Mike", time: "12th Jan 2020" },
        isSos: true,
        covid19Status: 1
      },
      {
        id: 12348,
        name: "John Doe 5",
        gender: "Male",
        age: 37,
        travel_history: "China",
        test_result: "Positive",
        address: "497 Evergreen Rd, Roseville, CA 95673",
        last_updated_by: { name: "Mike", time: "12th Jan 2020" },
        isSos: false,
        covid19Status: 2
      },
      {
        id: 12349,
        name: "John Doe 6",
        gender: "Male",
        age: 37,
        travel_history: "China",
        test_result: "Positive",
        address: "497 Evergreen Rd, Roseville, CA 95673",
        last_updated_by: { name: "Mike", time: "12th Jan 2020" },
        isSos: false,
        covid19Status: 3
      },
      {
        id: 12350,
        name: "John Doe 6",
        gender: "Male",
        age: 37,
        travel_history: "China",
        test_result: "Positive",
        address: "497 Evergreen Rd, Roseville, CA 95673",
        last_updated_by: { name: "Mike", time: "12th Jan 2020" },
        isSos: true,
        covid19Status: 3
      },
      {
        id: 12351,
        name: "John Doe 6",
        gender: "Male",
        age: 37,
        travel_history: "China",
        test_result: "Positive",
        address: "497 Evergreen Rd, Roseville, CA 95673",
        last_updated_by: { name: "Mike", time: "12th Jan 2020" },
        isSos: false,
        covid19Status: 3
      },
      {
        id: 12352,
        name: "John Doe 6",
        gender: "Male",
        age: 37,
        travel_history: "China",
        test_result: "Positive",
        address: "497 Evergreen Rd, Roseville, CA 95673",
        last_updated_by: { name: "Mike", time: "12th Jan 2020" },
        isSos: true,
        covid19Status: 3
      },
      {
        id: 12353,
        name: "John Doe 6",
        gender: "Male",
        age: 37,
        travel_history: "China",
        test_result: "Positive",
        address: "497 Evergreen Rd, Roseville, CA 95673",
        last_updated_by: { name: "Mike", time: "12th Jan 2020" },
        isSos: false,
        covid19Status: 3
      }
    ];

    const items = [
      {
        id: "option-1",
        text: "Option 1"
      },
      {
        id: "option-2",
        text: "Option 2"
      },
      {
        id: "option-3",
        text: "Option 3"
      },
      {
        id: "option-4",
        text: "Option 4"
      },
      {
        id: "option-5",
        text:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, aliquam. Blanditiis quia nemo enim voluptatibus quos ducimus porro molestiae nesciunt error cumque quaerat, tempore vero unde eum aperiam eligendi repellendus."
      }
    ];

    return (
      <React.Fragment>
        {!this.state.patientdetail ? (
          <div>
            <div className="bx--row row-margin">
              <p className="header-title">Showing 6 COVID-19 +VE patients</p>
              {isSearchBoxOpen ? (
                <Search
                  id="search-patient"
                  labelText="Search Patients"
                  placeHolderText="What are you looking for today?"
                  className="search_box"
                />
              ) : (
                <Search24
                  className="search_icon"
                  onClick={() => {
                    this.searchBtnClick();
                  }}
                />
              )}
              <Dropdown
                items={items}
                id="dropdown-search"
                label="Filter"
                className="dropdown-search"
                itemToString={item => (item ? item.text : "")}
              />
            </div>
            <div>
              {userType === 2 ? (
                <div className="bx--row">
                  <div className="box-container">
                    <div className="green-bg-color identity-cont"></div>
                    <span>Normal</span>
                  </div>
                  <div className="box-container">
                    <div className="yellow-bg-color identity-cont"></div>
                    <span>COVID-19 Possible</span>
                  </div>
                  <div className="box-container">
                    <div className="red-bg-color identity-cont"></div>
                    <span>COVID-19 Positive</span>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="patients_card_view_container">
              {userType === 1
                ? patientsList.map((value, index) => {
                    return (
                      <Link to={`/patientdetail/${value.id}`}>
                        <Tile className="doctor-card-view" key={index}>
                          {value.isSos ? (
                            <div className="alert_style">
                              <span className="alert_label">1 SOS</span>
                            </div>
                          ) : null}
                          <div className="name_risk_style">
                            <span
                              className={`name_title ${
                                value.covid19Status === 1
                                  ? "red-color"
                                  : value.covid19Status === 2
                                  ? "yellow-color"
                                  : "green-color"
                              }`}
                            >
                              {value.name}
                            </span>
                          </div>
                          <div>
                            <span className="patient-id">{value.id}</span>
                            <div className="title_strip">Home Quarantine</div>
                          </div>
                          <div className="patient_box">
                            <p className="label_title">Gender</p>
                            <p className="label_value">{value.gender}</p>
                          </div>
                          <div className="patient_box">
                            <p className="label_title">Age</p>
                            <p className="label_value">{value.age} years</p>
                          </div>
                          <div className="patient_box">
                            <p className="label_title">Travel History</p>
                            <p className="label_value">
                              {value.travel_history}
                            </p>
                          </div>
                          <div className="patient_box">
                            <p className="label_title">COVID-19 Status</p>
                            <p className="label_value">{value.test_result}</p>
                          </div>
                          <p>
                            <Location16 />{" "}
                            <span className="location-style">
                              {value.address}
                            </span>
                          </p>
                          <p className="time-updated">
                            <Information16 /> Last updated by{" "}
                            {value.last_updated_by.name},{" "}
                            {value.last_updated_by.time}
                          </p>
                        </Tile>
                      </Link>
                    );
                  })
                : patientsList.map((value, index) => {
                    return (
                      <Link to={`/patientdetail/${value.id}`}>
                        <div
                          key={index}
                          className={`operator-card-view ${
                            value.covid19Status === 1
                              ? "red-bg-color"
                              : value.covid19Status === 2
                              ? "yellow-bg-color"
                              : "green-bg-color"
                          }`}
                        >
                          {value.isSos ? (
                            <div className="sos-alert">
                              <Warning16 className="sos-icon" />
                            </div>
                          ) : null}
                          <span className="id-style">{value.id}</span>
                        </div>
                      </Link>
                    );
                  })}
            </div>
          </div>
        ) : (
          <PatientDetails />
        )}
      </React.Fragment>
    );
  }
}

export default PatientList;
