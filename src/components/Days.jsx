import React, { useContext } from 'react'
import './Global.css'
import img from './images/SunCloud.png';
import img2 from './images/Sunny.png';
import img3 from './images/ThunderRain.png';
import img4 from './images/Lightshowers.png';
import ThunderishContext from './ThunderishContext';

function Days() {
    const {apiData, hour} = useContext(ThunderishContext)
    if(hour) {
        return (
            <div className='Days-Parent'>
                 <div className='Hourly-child'>
                    <img src={img} alt="" />
                    <p>{hour.list[5].weather[0].description} </p>
                    <p>{(hour.list[5].main.temp - 273).toFixed()}°</p>
                </div>
                <hr />
                <div className='Hourly-child'>
                    <img src={img} alt="" />
                    <p>{hour.list[13].weather[0].description}</p>
                    <p>{(hour.list[13].main.temp - 273).toFixed()}°</p>
                </div>
                <hr />
                <div className='Hourly-child'>
                    <img src={img} alt="" />
                    <p>{hour.list[21].weather[0].description}</p>
                    <p>{(hour.list[21].main.temp - 273).toFixed()}°</p>
                </div>
                <hr />
                <div className='Hourly-child'>
                    <img src={img} alt="" />
                    <p>{hour.list[29].weather[0].description}</p>
                    <p>{(hour.list[29].main.temp - 273).toFixed()}°</p>
                </div>
                <hr />
                <div className='Hourly-child'>
                    <img src={img} alt="" />
                    <p>{hour.list[37].weather[0].description}</p>
                    <p>{(hour.list[37].main.temp - 273).toFixed()}°</p>
                </div>
                       
        
                
            </div>
          )
    }
  
}

export default Days