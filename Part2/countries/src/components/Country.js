import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'



const Country = ({ country }) => {
    const [weather, setWeather] = useState(null)
    console.log('weather at launch', weather)

    const api_key = process.env.REACT_APP_API_KEY
    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`).then(result => {
          setWeather(result.data.current)
        })
      }, [])
    
    return (
      <div>
        <h1>{country.name}</h1>
        <div>Capital: {country.capital}</div>
        <div>Population: {country.population}</div>
  
        <h2>Languages</h2>
  
        <ul>
          {country.languages.map((lang) => (
            <li key={lang.iso639_2}>{lang.name}</li>
          ))}
        </ul>
        <div>
          <img src={country.flag} height="80xp" alt="flag" />
        </div>
        <Weather weather={weather} city={country.capital} />
      </div>
    );
  };


  export default Country
  