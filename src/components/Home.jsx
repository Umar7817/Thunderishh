import React from 'react'
import Nav from './Nav'
import WeatherBox from './WeatherBox'
import Hourly from './Hourly'
import RightSide from './RightSide'
import LeftSide from './LeftSide'


function Home() {
  return (
    <div className='Home-Parent'>
    <Nav/>
    {/* <WeatherBox /> */}
    {/* <Hourly/> */}
    <div className='LR-bx'>
    <RightSide />
    <LeftSide />
    </div>
    
    </div>
  )
}

export default Home