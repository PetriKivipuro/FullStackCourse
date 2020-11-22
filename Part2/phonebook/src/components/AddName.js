import axios from 'axios'
import React from 'react'




const AddName = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => {
    const addName = (event) => {

        event.preventDefault()
        const nameObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,
        }
   axios.post(`http://localhost:3001/names`, nameObject)
        .then(response => {
            console.log(response)
        })

        
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
        <form onSubmit={addName}>
            name: <input
                value={newName}
                onChange={handleNameChange} />
            <div>
                number: <input
                    value={newNumber}
                    onChange={handleNumberChange} />
            </div>
            <button type="submit">add</button>

        </form>
    )

}
export default AddName