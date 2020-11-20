import React from 'react'

const Filter = ({ newFilter, setNewFilter }) => {
    const filter = (event) => {
        setNewFilter(event.target.value)

        return (
            <div>
                Filter <input
                    value={newFilter}
                    onChange={filter} />
            </div>
        )
    }
}

export default Filter