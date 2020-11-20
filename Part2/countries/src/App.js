import React, { useState, useEffect } from 'react'
import EnterCountry from './components/EnterCountry'
import ShowInfo from './components/ShowInfo'
import Country from './components/Country'
import axios from 'axios'



const App = () => {
  const [newCountry, setNewCountry] = useState('set joor sööts')

  useEffect(() => {
    console.log('effect')
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fullfilled')
        setNewCountry(response.data)
      })
  }, [])
  console.log('render', newCountry.length, 'kjsdffjal')

  return (
    <div>
      <EnterCountry newCountry={newCountry} setNewCountry={setNewCountry} />

      <Country newCountry={newCountry} setNewCountry={setNewCountry} />

    </div>
  )
}


export default App
