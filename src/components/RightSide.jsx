import React, { useContext } from "react";
import "./Global.css";
import { Calendar, Locate } from "lucide-react";
import Days from "./Days";
import ThunderishContext from "./ThunderishContext";
import reload from './images/Reload-1s-200px.svg'

function RightSide() {
  const { apiData } = useContext(ThunderishContext);
  const curDate = new Date(apiData.dt * 1000);

  var curdate = curDate.getUTCDate()

  // function join(date, options, separator) {
  //   function format(option) {
  //     let formatter = new Intl.DateTimeFormat('en', option);
  //     return formatter.format(date);
  //   }
  //   return options.map(format).join(separator);
  // }

  // let options = [{ day: 'numeric' }, { month: 'short' }, { year: 'numeric' }];
  // let joined = join(new Date, options, '-');

  if (apiData) {
    return (
      <div className="Right-side">
        <div className="location-time">
          <div>
            <div className="temp-clo">
              <div className="degree">
                <p>now</p>
                <h1>{(apiData.main.temp - 273).toFixed()}°C</h1>
                <p>{apiData.weather[0].description}</p>
              </div>
              <div>
                <img src="" alt="weather img" />
              </div>
            </div>
            <hr />
            <div>
              <div className="date-time">
                <Calendar />
                <p>{curdate}-12-2023</p>
              </div>
              <div className="date-time">
                <Locate />
                <p>{apiData.name}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="days-5">5 Days Forecast</p>
          <Days />
        </div>
      </div>
    );
  }
  else {
    return (
      <img className="reload" src={reload} alt="" />
    )
  }
}

export default RightSide;
