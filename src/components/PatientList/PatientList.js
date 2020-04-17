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
        country: 'San Francisco, CA',
        gender: 'Male',
        age: 37,
        travel_history: 'China',
        test_result: 'Positive',
        address: 'Villa 28',
        last_updated_by: {name: 'Mike', time: '12th Jan 2020'}
      },
      {
        id: 12345,
        name: 'John Doe 2',
        country: 'India',
        gender: 'Male',
        age: 37,
        travel_history: 'China',
        test_result: 'Positive',
        address: 'Villa 28',
        last_updated_by: {name: 'Mike', time: '12th Jan 2020'}
      },
      {
        id: 12346,
        name: 'John Doe 3',
        country: 'India',
        gender: 'Male',
        age: 37,
        travel_history: 'China',
        test_result: 'Positive',
        address: 'Villa 28',
        last_updated_by: {name: 'Mike', time: '12th Jan 2020'}
      },
      {
        id: 12347,
        name: 'John Doe 4',
        country: 'India',
        gender: 'Male',
        age: 37,
        travel_history: 'China',
        test_result: 'Positive',
        address: 'Villa 28',
        last_updated_by: {name: 'Mike', time: '12th Jan 2020'}
      },
      {
        id: 12348,
        name: 'John Doe 5',
        country: 'India',
        gender: 'Male',
        age: 37,
        travel_history: 'China',
        test_result: 'Positive',
        address: 'Villa 28',
        last_updated_by: {name: 'Mike', time: '12th Jan 2020'}
      },
      {
        id: 12349,
        name: 'John Doe 6',
        country: 'India',
        gender: 'Male',
        age: 37,
        travel_history: 'China',
        test_result: 'Positive',
        address: 'Villa 28',
        last_updated_by: {name: 'Mike', time: '12th Jan 2020'}
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
                <div className="alert_style">
                  <Warning16 className="alert_icon" />
                  <span className="alert_label">SOS ALERT</span>
                </div>
                <div className="name_risk_style">
                  <span className="name_title">{value.name}</span>
                  <div className="title_strip">At Risk</div>
                </div>
                <div className="addr_id">
                  <span>{value.country}</span>
                  <span className="text-right">ID: {value.id}</span>
                </div>
                <div className="patient_box">
                  <p>GENDER</p>
                  <p className="label_value">{value.gender}</p>
                </div>
                <div className="patient_box">
                  <p>AGE</p>
                  <p className="label_value">{value.age} years</p>
                </div>
                <div className="patient_box">
                  <p>TRAVEL HISTORY</p>
                  <p className="label_value">{value.travel_history}</p>
                </div>
                <div className="patient_box">
                  <p>TESTED FOR COVID-19</p>
                  <p className="label_value">{value.test_result}</p>
                </div>
                <p><Location16 /> <span className="label_value">{value.address}</span></p>
                <p>Last updated by {value.last_updated_by.name}, {value.last_updated_by.time}</p>
              </Tile>
            )
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default PatientList;