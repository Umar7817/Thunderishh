import { useEffect, useState } from 'react'

import './App.css'
import ThunderishContext from './components/ThunderishContext'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import News from './components/News'
import dotenv from "dotenv"
function App() {

  const [apiData, setApiData] = useState("");
  const [geoLoaction, setGeolocation] = useState("")
  const [hour, setHour] = useState("")




  const fetchApi = (query) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=40b0aa02f32b3808c1d78c223390e70d`)
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((err) => console.log(err.message))


    // fetchHour(apiData.coord.lat, apiData.coord.lon)
    console.log(apiData)

  }


  const gotLocation = (position) => {
    console.log(position)
    setGeolocation(position)
    // if(position)
    //     fetchApi(position.coord.latitude, position.coord.longtitude)

  }

  const failedToGet = () => {
    console.log("there was some error while fetching the location")
  }



  const getLocation = async () => {
    const loaction = navigator.geolocation.getCurrentPosition(gotLocation, failedToGet)


  }



  const fetchHour = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${apiData.coord.lat}&lon=${apiData.coord.lon}&appid=40b0aa02f32b3808c1d78c223390e70d`)
      .then((res) => res.json())
      .then(data => setHour(data))
      .catch((error) => console.log(error.message))
    console.log(hour)
  }


  // useEffect(()=> {
  //   fetchApi("ahmedabad")
  // },[])

  useEffect((lat, lon) => {
    if (apiData)
      fetchHour(apiData.coord.lat, apiData.coord.lon)

  }, [apiData]);

  useEffect((position) => {
    if (geoLoaction)
      fetchApi(geoLoaction.coord.latitude, apiData.coord.longitude)
  }, [geoLoaction]);




  return (
    <ThunderishContext.Provider value={{ apiData, fetchApi, hour }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />

      </Routes>
    </ThunderishContext.Provider>
  )
}

export default App
