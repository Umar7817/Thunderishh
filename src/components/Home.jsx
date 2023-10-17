import React from 'react'
import Nav from './Nav'
import WeatherBox from './WeatherBox'
import Hourly from './Hourly'


function Home() {
  return (
    <div className='Home-Parent'>
    <Nav/>
    <WeatherBox />
    {/* <Hourly/> */}
    </div>
  )
}

export default Home