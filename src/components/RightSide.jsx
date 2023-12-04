import React, { useContext } from "react";
import "./Global.css";
import { Calendar, Locate } from "lucide-react";
import Days from "./Days";
import ThunderishContext from "./ThunderishContext";

function RightSide() {
  const {apiData} = useContext(ThunderishContext)
  if(apiData){
    return (
      <div className="Right-side">
      <div className="location-time">
        <div>
          <div className="temp-clo">
            <div className="degree">
              <p>now</p>
              <h1 >{apiData.main.temp.toFixed()}°f</h1>
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
              <p>wednesday, 1 mar</p>
            </div>
            <div className="date-time">
              <Locate />
              <p>{apiData.name}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>5 Days Forecast</p>
        <Days/>
      </div>

      </div>
    )
  }
  
}

export default RightSide;
