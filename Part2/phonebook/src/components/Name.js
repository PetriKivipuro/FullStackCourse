import React from 'react'


const Name = ({ persons, newFilter, removeInformation }) => {

    const FilteredPersons = newFilter === ''
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

    return (
        <div>
            {FilteredPersons.map(names =>
                <div key={names.name}> {names.name}, {names.number} <button onClick={() => removeInformation(names.id)}>delete </button> </div>
                            )}
        </div>
    )
}

export default Name