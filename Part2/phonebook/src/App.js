import React, { useState } from 'react'
import Name from './components/Name'
import Filter from './components/Filter'
import AddName from './components/AddName'


const App = (props) => {
  const [persons, setPersons] = useState(props.names)
  const [newName, setNewName] = useState('new name here..')
  const [newNumber, setNewNumber] = useState('number here')
  const [newFilter, setNewFilter] = useState('')


  const filteredPersons = newFilter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    < div >

      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />

      <h2>Add a new</h2>
      <AddName newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} />

      <div>
        <h2>Numbers</h2>

        {filteredPersons.map(persons =>
          <Name key={persons.name} name={persons} />
        )}


      </div>
    </div >

  )
}

export default App
