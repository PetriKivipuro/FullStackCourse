import React from 'react'
import nameService from '../services/names'

const AddName = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber, setModMessage }) => {
    const addName = (event) => 
    {

        event.preventDefault()
        const nameObject = {
            name: newName,
            number: newNumber,
            id: Math.random() < 0.5

        }
   
        if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase() && person.number === newNumber)) {

            window.alert(newName + ' has already been added')
        }
        else if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase() && person.number !== newNumber)){
            const notific = (window.confirm(`${newName} already exist. Do wish to update the number?`))
                if(notific === true)
                {
                    updateNumber(nameObject) 
                }
                else {
                    return null
                }
        }       
        else {
            nameService
            .create(nameObject)
            .then(response => {
                console.log(response)
                setPersons(persons.concat(response.data))
            setModMessage(
                `${newName} is now added` 
            )
            setTimeout(() =>{
                setModMessage(null)
                },5000)

                setNewName('')
                setNewNumber('')
})

                .catch(error => {
                setModMessage(
                    `name '${persons.content}' has already deleted`
                )
                setTimeout(() =>{
                setModMessage(null)
                },5000)
    })

    }}


const updateNumber=(names) =>{
const find = persons.find(pers => pers.name.toLowerCase()===names.name.toLowerCase()).id

names={ ...names, id:find}

nameService
.update(find, names)
.then(response => {
    const update = persons.map(p => p.id !== find ? p : response.data)
    setPersons(update)
    
    setModMessage(
        `'${newName}' has now been updated!`
    )
    setTimeout(() =>{
        setModMessage(null)
        },5000)
})
  .catch(error => {
                setModMessage(
                    `name '${persons.content}' has been updated`
                )
                setTimeout(() =>{
                setModMessage(null)
                },5000)
    })

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