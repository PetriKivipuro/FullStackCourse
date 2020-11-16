import React from 'react'

const Molololo = ({ names }) => {
    return (
        <div>
            {names.name}, { names.number}
        </div>
    )
}

const Name = ({ persons, newFilter }) => {

    const FilteredPersons = newFilter === ''
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

    return (
        <div>
            {FilteredPersons.map(names =>
                <Molololo key={names.name} names={names} />
            )}
        </div>
    )
}

export default Name