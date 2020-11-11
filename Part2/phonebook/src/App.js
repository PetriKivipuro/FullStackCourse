import React, { useState } from 'react'
import Name from './components/Name'
import Filter from './components/Filter'
import AddName from './components/AddName'


const App = (props) => {
  const [persons, setPersons] = useState(props.names)
  const [newName, setNewName] = useState('new name here..')
  const [newNumber, setNewNumber] = useState('number here')
  const [newFilter, setNewFilter] = useState('')

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
