import React, {useState, useEffect } from 'react'
import axios from 'axios'
import CountryFiltering from './components/CountryFiltering'
import Countries from './components/Countries'

  const App = () => {
    const [countries, setCountries] = useState([])
    const [showCertainCountries, setFilter] = useState('')
  
    useEffect(() => {
      axios.get('https://restcountries.eu/rest/v2/all').then((result) => {
        setCountries(result.data)
      })
    }, [])
  
    const filteredCountries = showCertainCountries.length === 0 
    ? countries 
    : countries.filter(countriesN => countriesN.name.toLowerCase().includes(showCertainCountries.toLowerCase()))
    return (
      <div>
        <CountryFiltering
          value={showCertainCountries}
          setValue={setFilter}
        />
        <Countries
          countries={filteredCountries}
          setValue={setFilter}
        />
      </div>
    )
  }


export default App