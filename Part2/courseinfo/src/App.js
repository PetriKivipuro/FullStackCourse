import React from 'react'
import Content from './components/Content'
import Total from './components/Total'
const App = () => {

    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]

    }
    return <Content course={course} />



}
const result = notes.map(note => note.id)
console.log('asas', result)

export default App