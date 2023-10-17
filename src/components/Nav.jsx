import React, { useState, useContext } from 'react'
import './Global.css'
import { Link } from 'react-router-dom'
import { Search, Locate, MapPin, ClipboardTypeIcon } from 'lucide-react'

import ThunderishContext from './ThunderishContext'


function Nav() {


    const [city, setCity] = useState("")
    const { data, fetchApi } = useContext(ThunderishContext);
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

                    <input type="text" placeholder='Enter City Name' onChange={e => setCity(e.target.value)} />
                    <Search onClick={ () => {
                        fetchApi(city)                 
                    }} />
                    <MapPin />
                </div>


            </div>
        </>
    )
}

export default Nav