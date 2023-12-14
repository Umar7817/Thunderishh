import React from 'react'
import { Wind, Sunrise, Sunset, Droplet, Waves, ThermometerSnowflake, ThermometerSun } from "lucide-react";
import { useContext } from "react";
import ThunderishContext from "./ThunderishContext";
import reload from './images/Reload-1s-200px.svg'
import Hourly from './Hourly';

function LeftSide() {

  const { apiData } = useContext(ThunderishContext);

  if(apiData) {

    const dt = new Date(apiData.dt * 1000);
    
    const sunrise = new Date(apiData.sys.sunrise * 1000);
    var form = sunrise.getHours()

    const sunset = new Date(apiData.sys.sunset * 1000);
    var formsun = sunset.getHours()

    if( formsun > 12) {
      var final = formsun - 12;
    }
    
    

  }
  if(apiData){  
    return (
      <div className='Left-side'>
        <h3>Todays Highlights</h3>
        <div className='top-container'>
          <div className='top-left-container'>
            <div className='about-air'>
              <p>Air Quality Index</p>
              
            </div>
            <div className='air-quality'>
              <div className='inf-div'>
                <Wind/>
              </div>
              <div className='inf-div'>
                <p>S0<sub>2</sub></p>
                <h3>7.75</h3>
              </div>
              <div className='inf-div'>
                <p>NO2</p>
                <h3>33.6</h3>
              </div>
              <div className='inf-div'>
                <p>O<sub>2</sub></p>
                <h3>38.6</h3>
              </div>
            </div>
          </div>
        
        <div className='top-right-container'>
        <div>
          <p>Sunrise And Sunset</p>
  
        </div>
        <div className='sun-rise-cont'>
          <div className='sunRise'>
            <div>
              <Sunrise className='SUNRise-2'/>
            </div>
            <div>
              <p>Sunrise</p>
              <h3>{form}AM</h3>
            </div>
          </div>
          <div className='sunSet'>
          <div>
              <Sunset className='SUNSet'/>
            </div>
            <div>
              <p>Sunset</p>
              <h3>{final}PM</h3>
            </div>
          </div>
        </div>
        </div>
        </div>
  
        <div className='bottom-container'>
          <div className='btc-1'>
            <div>
              <p>Humidity</p>
            </div>
            <div className='common-1'>
              <Droplet/>
              <h3>{apiData.main.humidity}%</h3>
            </div>
          </div>
          <div className='btc-2'>
            <div>
              <p>Pressure</p>
  
            </div>
            <div className='common-1'>
              <Waves/>
              <h3>{apiData.main.pressure}hpa</h3>
  
            </div>
          </div>
          <div className='btc-3'>
            <div>
              <p>Temp-Min</p>
            </div>
            <div className='common-1'>
              <ThermometerSnowflake/>
              <h3>{(apiData.main.temp_min - 273).toFixed()}°C</h3>
            </div>
            
          </div>
          <div className='btc-4'>
            <div>
              <p>Temp-Max</p>
            </div>
            <div className='common-1'>
              <ThermometerSun/>
              <h3>{(apiData.main.temp_max - 273).toFixed()}°C</h3>
            </div>
          </div>
        </div>
  

        <div>

       
        </div>
      </div>
    )



  }
  else {
    return (
      <img className="reload" src={reload} alt="" />
    )
  }
  
}

export default LeftSide