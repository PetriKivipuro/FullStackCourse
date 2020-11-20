import React from 'react'


const EnterCountry = ({ newCountry, setNewCountry }) => {

    const country = (event) => {
        setNewCountry(event.target.value)

    }
    return (
        <div>
            <form onSubmit={country}>
                Find countries <input
                    value={newCountry}
                    onChange={country} />
            </form>
        </div>

    )

}

export default EnterCountry
