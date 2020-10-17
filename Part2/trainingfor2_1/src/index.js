import React from 'react'
import ReactDOM from 'react-dom'


const courses = [
  {
    name: 'Half Stack application development',
    id: 1,
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
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]


const Header = () => {
  return (
    <h1>Web development curriculum</h1>
  )
}

const Total = ({ courses }) => {

  const total = courses.reduce(function (sum, parts) {
    console.log('mitä tekee', sum, parts)
    return sum + parts.exercises
  }, 0)
  console.log('Tähän summa: ', total)
  return (
    <div>
      <p><b>Total amount of {total} exercises </b></p>
    </div>
  )
}

const Courses = ({ courses }) => {
  console.log('courseees', courses)
  return (

    <div>
      <Header />
      <Parts courses={courses} />
      <Content courses={courses} />


      <Total courses={courses} />
    </div>
  )
}


const Parts = ({ courses }) => {
  console.log('partsit', courses)
  return (
    <div>
      {courses.map(part =>
        <p key={part.id}>{part.exercise}</p>
      )}
    </div>
  )
}

const Content = ({ courses }) => {
  return (
    <div>
      {courses.map(contentti =>
        <p key={contentti.id}>{contentti.name}</p>
      )}
    </div>
  )
}
const App = () => {
  return (
    <div>

      <Courses courses={courses} />

    </div >

  )
}

ReactDOM.render(<App course={courses} />, document.getElementById('root'))
