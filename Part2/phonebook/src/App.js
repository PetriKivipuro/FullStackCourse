import React, { useState } from 'react'
import Name from './Name'

const App = (props) => {
  const [persons, setPersons] = useState(props.names)
  const [newName, setNewName] = useState('new name here..')
  const [newNumber, setNewNumber] = useState('number here')


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

  return (
    < div >

      <h2>Phonebook</h2>

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

        {persons.map((name, i) =>
          <Name key={i} name={name} />
        )}
      </div>
    </div >

  )
}


export default App
