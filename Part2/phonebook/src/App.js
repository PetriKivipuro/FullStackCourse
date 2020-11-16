import React, { useState, useEffect } from 'react'
import Name from './components/Name'
import Filter from './components/Filter'
import AddName from './components/AddName'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('new name here..')
  const [newNumber, setNewNumber] = useState('number here')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios.get('http://localhost:3001/names')
      .then(response => {
        console.log('promise fullifille')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persondfgdfs')

  return (
    < div >

      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />

      <h2>Add a new</h2>
      <AddName newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} />

      <div>
        <h2>Numbers</h2>

        <Name persons={persons} newFilter={newFilter} setNewFilter={setNewFilter} />


      </div>
    </div >

  )
}

export default App
