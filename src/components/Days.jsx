import React from 'react'
import './Global.css'
import img from './images/SunCloud.png';
import img2 from './images/Sunny.png';
import img3 from './images/ThunderRain.png';
import img4 from './images/Lightshowers.png';

function Days() {
  return (
    <div className='Days-Parent'>
         <div className='Hourly-child'>
            <img src={img} alt="" />
            <p>Sun</p>
            <p>28°</p>
        </div>

        <div className='Hourly-child'>
            <img src={img2} alt="" />
            <p>Mon</p>
            <p>28°</p>
        </div>


        <div className='Hourly-child'>
            <img src={img3} alt="" />
            <p>Tue</p>
            <p>28°</p>
        </div>

        <div className='Hourly-child'>
            <img src={img4} alt="" />
            <p>Wed</p>
            <p>28°</p>
        </div>

        <div className='Hourly-child'>
            <img src={img} alt="" />
            <p>Thu</p>
            <p>28°</p>
        </div>
    </div>
  )
}

export default Days