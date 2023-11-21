import React, {useState, useEffect} from 'react'
import Card from './Card'
import axios from 'axios';
import { setFunction } from './icons';

function Main() {
    const [city, setCity] = useState((null));
    const [search, setSearch] = useState("Bengaluru");
    const [icon, seticon] = useState((null))
    console.log(search);

    useEffect(() => {
      async function fetchWeather() {
        let api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1b87dc1e270362eaa0f4a9349727fda7`
      try {
        let response = await axios.request(api);
        setCity(response.data);
        if (response.data.weather) {
          seticon(response.data.weather[0].icon);
        }
      } catch (error) {
        console.log(error.response.data.message);
      } 
    }
    fetchWeather();
    },[search])
    
    console.log(city);
   

  return (
    <div>
        <input className='search-button' type="search" placeholder='Search City'  onChange={(e)=>setSearch(e.target.value)}/>
        {
            search? (<Card search={search} city={city} icon={setFunction(icon)} />) : <h1>City Not Found</h1>
        }
    </div>
  )
}

export default Main