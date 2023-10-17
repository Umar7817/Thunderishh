import { useState } from 'react'

import './App.css'
import ThunderishContext from './components/ThunderishContext'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import News from './components/News'

function App() {

  


  const [data, setData] = useState("");

  const fetchApi = (query) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=40b0aa02f32b3808c1d78c223390e70d`)
    .then( (res) => res.json())
    .then( data => setData(data))
    .catch((err) => console.log(err.message))
    
  }

 


  return (
    <ThunderishContext.Provider value={{ data, fetchApi , }}>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/news' element={<News />} />
   
      </Routes>
    </ThunderishContext.Provider>
  )
}

export default App