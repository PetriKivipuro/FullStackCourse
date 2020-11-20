import React from 'react'

const Names = ({ countries }) => {
    return (
        <div>
            {countries.name}
        </div>
    )
}

const Country = ({ newCountry, setNewCountry }) => {
    const FilterCountries = setNewCountry === ''
        ? newCountry
        : newCountry.filter(countries => countries.name.toLowerCase().includes(newCountry.toLowerCase()))
    return (
        <div>
            {FilterCountries.map(countries =>
                <Names key={countries.names} />
            )}

        </div>
    )
}


export default Country