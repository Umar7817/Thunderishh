import React from 'react'
import './Global.css'
import { Search, Locate, MapPin, Wind, Droplet } from 'lucide-react'
import img from './images/ThunderRain.png';
import Hourly from './Hourly'
import Days from './Days';
import react, {useState, useContext} from "react";
import ThunderishContext from './ThunderishContext';


function WeatherBox() {

  

  return (
    <div className="weather-bx-parent">

      <div className='rightside-bx'>

        <div className="Date-Time">
          <h1>7:32 AM</h1>
          <p>Friday, 13 October</p>
        </div>
        <div className="hourly">
          <Hourly />
          <Days />
        </div>
      </div>
      <div className='leftside-bx'>
        <div className='left-weather'>
          <div className='Locate-city'>
            <MapPin /> <h4>Ahmedabad</h4>
          </div>
          <div className='img-bx'>
            <img src={img} alt="img" />
            <p>Today : 13 October</p>
            <h1>29°</h1>
            <p>Thunder</p>
            <div className='Detail-Parent'>
              <div className='Wind'>
                <Wind /> <p> | </p> <p>19km/hr</p>

              </div >
              <div className='Humidity'>

                <Droplet /> | <p>22%</p>
              </div>

            </div>
          </div>


        </div>

        {/* <div className='left-bottom-weather'>
            
          </div>
             */}
      </div>

    </div>
  )
}

export default WeatherBox