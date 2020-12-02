import React from 'react'

const AddingInformationNote= ({message}) => {
    if (message=== null){
        return null
    }
    return (
        <div className="error">
            {message}
        </div>
    )
}



export default AddingInformationNote