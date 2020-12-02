import React from 'react'

const AddInformationModification= ({messageA}) => {
    if (messageA=== null){
        return null
    }
    return (
        <div className="update">
            {messageA}
        </div>
    )
}



export default AddInformationModification