import React from "react";
import "./PatientDetails.scss";
import {
  ChevronLeft20,
  TemperatureHot20,
  Favorite20,
  Information20,
  CircleFilled20,
  ArrowRight20,
  NotebookReference20
} from "@carbon/icons-react";
import {
  TextArea,
  Select,
  SelectItem,
} from "carbon-components-react";
import { LineChart } from "@carbon/charts-react";
import { Link } from "react-router-dom";
import "@carbon/charts/styles.css";

class PatientDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }
  render() {
    return (
      <div className="mainbox">
        <div className="navigation">
          <Link to="/">
            <ChevronLeft20 /> <span>Back</span>
          </Link>
          <div className="refer">
            <NotebookReference20 /> <span>Refer to another Hospital</span>
           
          </div>
        </div>
        <div className="maincover">
          <div className="homeqstatus">Home Quarantine</div>
          <div className="header">
            <div className="namenid">
              <div className="name">Lisa Thomas</div>
              <div className="id">12345</div>
            </div>
            <div className="tabdesc">
              <div className="desc">
                <div className="desctitle">Gender</div>
                <div className="descdetail">Female</div>
              </div>
              <div className="desc">
                <div className="desctitle">Age</div>
                <div className="descdetail">53 years</div>
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
              <div className="chart">
                <div className="title">
                  <TemperatureHot20 />
                  <span>
                    Body Temprature in <span className="txtdegree">o</span>C
                  </span>
                </div>
                <LineChart
                  data={this.state.data}
                  options={this.state.options}
                ></LineChart>
                <div className="bottom">
                  <Information20 />
                  <span>
                    98<span className="txtdegree">o</span>C is normal temprature
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
                <div className="timeboxdetail bdrl">
                  <div className="timeicon">
                    <CircleFilled20 />
                  </div>
                  <div className="timedetail">
                    <div className="detail">
                      Travalled back from italy on 2nd April 2020
                    </div>
                    <div className="time">10:15 am, 4 Apr 2020</div>
                  </div>
                </div>
                <div className="timeboxdetail">
                  <div className="timeicon">
                    <CircleFilled20 />
                  </div>
                  <div className="timedetail">
                    <div className="detail">
                      Travalled back from italy on 2nd April 2020
                    </div>
                    <div className="time">10:15 am, 4 Apr 2020</div>
                  </div>
                </div>
                <div className="entry">
                  <div className="entrybox">
                    <ArrowRight20 />
                    <TextArea className="textarea" />
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientDetails;
