import React from 'react'
import Header from './Header'


const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total exercises={course.parts.map(part => part.exercises)} />
        </div>
    )
}

const Total = ({ exercises }) => {

    const total = exercises.reduce((sum, parts) => sum + parts)
    return (
        <div>
            <b>Total amount of {total} exercises </b>
        </div>
    )
}

const Part = (props) => {
    const { part } = props

    return (
        <p>
            { part.name}, { part.exercises}
        </p>
    )
}
const Content = (props) => {
    const { parts } = props
    return (
        <div>
            {parts.map(course =>
                <Part key={course.id} part={course} />
            )}

        </div>
    )
}


export default Course