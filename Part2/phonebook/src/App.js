import React, { useState } from 'react'
import Name from './Name'
const Filter = ({ newFilter, setNewFilter }) => {
  const filter = (event) => {
    setNewFilter(event.target.value)
  }
  return (
    <div>
      Filter <input
        value={newFilter}
        onChange={filter} />
    </div>
  )

}
const App = (props) => {
  const [persons, setPersons] = useState(props.names)
  const [newName, setNewName] = useState('new name here..')
  const [newNumber, setNewNumber] = useState('number here')
  const [newFilter, setNewFilter] = useState('')



  const addName = (event) => {
    event.preventDefault()
    console.log('btn clkd', event.target)
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    console.log('pers', persons)
    if (persons.map(person => person.name.toLowerCase()).includes(newName.toLowerCase())) {

      window.alert(newName + ' has already been added')
    }
    else {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const filteredPersons = newFilter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    < div >

      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />

      <h2>Add a new</h2>
      <form onSubmit={addName}>
        name: <input
          value={newName}
          onChange={handleNameChange} />
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberChange} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>

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
