import React from 'react'
import './Global.css'
import img from './images/SunCloud.png';
import img2 from './images/Sunny.png';
import img3 from './images/ThunderRain.png';
import img4 from './images/Lightshowers.png';


function Hourly() {
  return (
    <div className='Hourly-parent'>
        <div className='Hourly-child'>
            <img src={img} alt="" />
            <p>7:00 AM</p>
            <p>28°</p>
        </div>

        <div className='Hourly-child'>
            <img src={img2} alt="" />
            <p>9:00 AM</p>
            <p>28°</p>
        </div>


        <div className='Hourly-child'>
            <img src={img3} alt="" />
            <p>11:00 AM</p>
            <p>28°</p>
        </div>

        <div className='Hourly-child'>
            <img src={img4} alt="" />
            <p>1:00 PM</p>
            <p>28°</p>
        </div>

        <div className='Hourly-child'>
            <img src={img} alt="" />
            <p>3:00 PM</p>
            <p>28°</p>
        </div>
        
        

        

    </div>
  )
}

export default Hourly