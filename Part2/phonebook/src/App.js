import React, { useState, useEffect } from 'react'
import Name from './components/Name'
import Filter from './components/Filter'
import AddName from './components/AddName'
import nameService from './services/names'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('new name here..')
  const [newNumber, setNewNumber] = useState('number here')
  const [newFilter, setNewFilter] = useState('')

    useEffect(() => {
      console.log('effect')
      nameService.getAll()
        .then(response => {
          console.log('promise fullifille')
          setPersons(response.data)
        })
    }, [])
  console.log('Render', persons.length, 'persons')

const removeInformation=(id) => {
const aa = persons.find(n => n.id === id)

const warning = (window.confirm(`Are you sure you want to delete ${aa.name}`))

if (warning === true)
{
  nameService
  .remove(id)
  .then(response => {
  
    const remove = persons.filter(person => id !== person.id)
    setPersons(remove)
  
  })
}



}

  return (
    < div >

      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />

      <h2>Add a new</h2>
      <AddName newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} />

      <div>
        <h2>Numbers</h2>

        <Name persons={persons} newFilter={newFilter} setNewFilter={setNewFilter} removeInformation={removeInformation}/>


      </div>
    </div >

  )
}

export default App
