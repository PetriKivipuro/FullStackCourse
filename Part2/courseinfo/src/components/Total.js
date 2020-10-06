import React from 'react'


const Total = (props) => {
    console.log('Tähän summa: ', props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises)
    return (
        <div>
            <p><b>Total amount of {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises + props.course.parts[3].exercises} exercises </b></p>
        </div>
    )
}

export default Total