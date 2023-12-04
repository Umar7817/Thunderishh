import { useEffect, useState } from 'react'

import './App.css'
import ThunderishContext from './components/ThunderishContext'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import News from './components/News'

function App() {

  const [apiData, setApiData] = useState("");
  const [hour, setHour] = useState("")
  

  const fetchApi =  (query) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=40b0aa02f32b3808c1d78c223390e70d`)
    .then( (res) => res.json())
    .then( (data) => setApiData(data))
    .catch((err) => console.log(err.message))

    
    // fetchHour(apiData.coord.lat, apiData.coord.lon)
    console.log(apiData)
    
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
  // },[apiData])

    // useEffect((lat, lon) => {
    //   if(apiData){


    //     fetchHour(apiData.coord.lat, apiData.coord.lon)
    //   }
    // }, [apiData]);


  

  return (
    <ThunderishContext.Provider value={{ apiData, fetchApi, hour}}>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/news' element={<News />} />
   
      </Routes>
    </ThunderishContext.Provider>
  )
}

export default App
