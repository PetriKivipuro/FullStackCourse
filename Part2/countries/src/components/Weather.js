import React from 'react'

const Weather = ({ weather, city }) => {
    
    if (!weather) {
      return null
    }
    return (
      <div>
        <h3>Weather in {city}</h3>
        <div>
          <b>Temperature:</b> {weather.temperature} Celcius
        </div>
        <img src={weather.weather_icons[0]} alt={weather.weather_descriptions[0]} />
        <div>
          <b>Wind:</b> {weather.wind_speed} mph. Direction: {weather.wind_dir}
        </div>
      </div>
    )
  }


export default Weather