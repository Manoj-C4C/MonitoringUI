import React, { Component } from 'react';
import './PatientList.scss';
import {
  Tile,
  Search,
  Dropdown
} from "carbon-components-react";
import { Location16, Warning16, Filter32 } from '@carbon/icons-react';

class PatientList extends Component {
  render() {

    const patientsList = [
      {
        id: 12344,
        name: 'John Doe test 1',
        gender: 'Male',
        age: 37,
        travel_history: 'China',
        test_result: 'Positive',
        address: '497 Evergreen Rd, Roseville, CA 95673',
        last_updated_by: {name: 'Mike', time: '12th Jan 2020'},
        isSos: false,
        covid19Status: 2
      },
      {
        id: 12345,
        name: 'John Doe 2',
        gender: 'Male',
        age: 37,
        travel_history: 'China',
        test_result: 'Positive',
        address: '497 Evergreen Rd, Roseville, CA 95673',
        last_updated_by: {name: 'Mike', time: '12th Jan 2020'},
        isSos: true,
        covid19Status: 3
      },
      {
        id: 12346,
        name: 'John Doe 3',
        gender: 'Male',
        age: 37,
        travel_history: 'China',
        test_result: 'Positive',
        address: '497 Evergreen Rd, Roseville, CA 95673',
        last_updated_by: {name: 'Mike', time: '12th Jan 2020'},
        isSos: false,
        covid19Status: 1
      },
      {
        id: 12347,
        name: 'John Doe 4',
        gender: 'Male',
        age: 37,
        travel_history: 'China',
        test_result: 'Positive',
        address: '497 Evergreen Rd, Roseville, CA 95673',
        last_updated_by: {name: 'Mike', time: '12th Jan 2020'},
        isSos: true,
        covid19Status: 1
      },
      {
        id: 12348,
        name: 'John Doe 5',
        gender: 'Male',
        age: 37,
        travel_history: 'China',
        test_result: 'Positive',
        address: '497 Evergreen Rd, Roseville, CA 95673',
        last_updated_by: {name: 'Mike', time: '12th Jan 2020'},
        isSos: false,
        covid19Status: 2
      },
      {
        id: 12349,
        name: 'John Doe 6',
        gender: 'Male',
        age: 37,
        travel_history: 'China',
        test_result: 'Positive',
        address: '497 Evergreen Rd, Roseville, CA 95673',
        last_updated_by: {name: 'Mike', time: '12th Jan 2020'},
        isSos: false,
        covid19Status: 3
      }
    ];

    const items = [
      {
        id: 'option-1',
        text: 'Option 1',
      },
      {
        id: 'option-2',
        text: 'Option 2',
      },
      {
        id: 'option-3',
        text: 'Option 3',
      },
      {
        id: 'option-4',
        text: 'Option 4',
      },
      {
        id: 'option-5',
        text:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, aliquam. Blanditiis quia nemo enim voluptatibus quos ducimus porro molestiae nesciunt error cumque quaerat, tempore vero unde eum aperiam eligendi repellendus.',
      },
    ];

    return (
      <React.Fragment>
        <div className="bx--row row-margin">
          <Search id="search-patient" labelText="Search Patients" placeHolderText="Search Patients" className="search_box" />
          <Filter32 className="filter-icon" />
          <div className="vert-line"></div>
          <Dropdown
            items={items}
            id="dropdown-search"
            label= "Filter"
            className="dropdown-search"
            itemToString={item => (item ? item.text : '')}
          />
        </div>
        <div className="bx--row row-margin">
          <p className="header-title">Showing 6 COVID-19 +VE patients</p>
        </div>      
        <div className="patients_card_view_container">     
          {patientsList.map((value, index) => {
            return(
              <Tile className="card-view" key={index}>
                {value.isSos ? 
                  <div className="alert_style">
                    <Warning16 className="alert_icon" />
                    <span className="alert_label">SOS ALERT</span>
                  </div> : null 
                }
                <div className="name_risk_style">
                  <span className={`name_title ${value.covid19Status === 1 ? 'red-color' : (value.covid19Status === 2 ? 'yellow-color' : 'green-color')}`}>{value.name}</span>
                </div>
                <div>
                  <span className="patient-id">ID: {value.id}</span>
                  <div className="title_strip">Home Quarantine</div>
                </div>
                <div className="patient_box">
                  <p className="label_title">GENDER</p>
                  <p className="label_value">{value.gender}</p>
                </div>
                <div className="patient_box">
                  <p className="label_title">AGE</p>
                  <p className="label_value">{value.age} years</p>
                </div>
                <div className="patient_box">
                  <p className="label_title">TRAVEL HISTORY</p>
                  <p className="label_value">{value.travel_history}</p>
                </div>
                <div className="patient_box">
                  <p className="label_title">TESTED FOR COVID-19</p>
                  <p className="label_value">{value.test_result}</p>
                </div>
                <p><Location16 /> <span className="location-style">{value.address}</span></p>
                <p className="time-updated">Last updated by {value.last_updated_by.name}, {value.last_updated_by.time}</p>
              </Tile>
            )
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default PatientList;