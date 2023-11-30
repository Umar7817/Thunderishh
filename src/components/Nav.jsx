import React, { useState, useContext } from 'react'
import './Global.css'
import { Link } from 'react-router-dom'
import { Search, Locate, MapPin, ClipboardTypeIcon } from 'lucide-react'

import ThunderishContext from './ThunderishContext'


function Nav() {


    const [city, setCity] = useState("")
    const { data, fetchApi} = useContext(ThunderishContext);

    const handleChange = (e) => {
        setCity(e.currentTarget.value)
    }

    const handleClick = () => {
       fetchApi(city)

    }

    const gotLocation = (position) => {
        console.log(position)
    }

    const failedToGet = () => {
        console.log("there was some error while fetching the location")
    }



    const getLocation =  async () => {
        const loaction = navigator.geolocation.getCurrentPosition(gotLocation, failedToGet)
     
        
        
       }


    return (
        <>
            <div className='Nav-Parent'>
                <div className='Head-Li'>
                    <h2>Thunderish</h2>


                </div>
                <div className='Links'>
                    <ul>
                        <Link className='Li-items' to="/" >Home</Link>
                        <Link className='Li-items' to='News'>News</Link>
                    </ul>
                </div>


                <div className='Input'>

                    <input type="text" placeholder='Enter City Name' onChange={handleChange} />
                    <Search className='search-btn' onClick={() => handleClick()} />
                </div>
                    <div className='location-div' onClick={() => getLocation() }>

                    <MapPin  />
                    <p>Current Location</p>
                    </div>


            </div>
        </>
    )
}

export default Nav