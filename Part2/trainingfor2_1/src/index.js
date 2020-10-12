import React from 'react'
import ReactDOM from 'react-dom'

const courses = {
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
    },
    {
      name: 'lolo',
      exercises: 100,
      id: 5
    }
  ]
}
const total = courses.parts.reduce(function (sum, parts) {
  console.log('mitä tekee', sum, parts)
  return sum + parts.exercises
}, 0)

const Total = () => {
  console.log('Tähän summa: ', total)
  return (
    <div>
      <p><b>Total amount of {total} exercises </b></p>
    </div>
  )
}

const App = (props) => {
  const { course } = props

  return (
    <div>
      <h1>{course.name}</h1>

      {course.parts.map(courseNames =>

        <p key={courseNames.id}>
          {courseNames.name}, {courseNames.exercises}

          {/* {console.log('names', courseNames.name, courseNames.exercises)} */}
        </p>
      )}

      <div>
        <b>
          <Total course={courses.exercises} />

        </b>
      </div>




    </div >

  )
}

ReactDOM.render(<App course={courses} />, document.getElementById('root'))
