import React from 'react'


const Total = (props) => {
    console.log('Tähän summa: ', props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises)
    return (
        <div>
            <p>Total amount of exercises: {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises} </p>
        </div>
    )
}

export default Total