import React, { useState } from 'react'
import Name from './Name'

const App = (props) => {
  const [persons, setPersons] = useState(props.names)
  const [newName, setNewName] = useState('new name here..')


  const addName = (event) => {
    event.preventDefault()
    console.log('btn clkd', event.target)
    const nameObject = {
      name: newName,
      id: persons.length + 1,


    }

    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)

  }
  return (
    <div>
      <h2>Phonebook</h2>


      <form onSubmit={addName}>
        name: <input
          value={newName}
          onChange={handleNameChange} />
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
    </div>
  )
}


export default App
