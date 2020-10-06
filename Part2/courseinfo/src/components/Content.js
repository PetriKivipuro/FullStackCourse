import React from 'react'
import Total from './Total'

const Content = (props) => {
    console.log('alaotsikko tähän: ', props.course.parts[0].name)
    console.log('tehtävämääränkunsaistähän: ', props.course.parts[0].exercises)
    console.log('total', { Total })
    return (
        <div>

            <h1>{props.course.name}</h1>
            <p>{props.course.parts[0].name},  {props.course.parts[0].exercises}</p>
            <p>{props.course.parts[1].name}, {props.course.parts[1].exercises}</p>
            <p>{props.course.parts[2].name}, {props.course.parts[2].exercises}</p>
            <p>{props.course.parts[3].name}, {props.course.parts[3].exercises}</p>


        </div >
    )
}

export default Content