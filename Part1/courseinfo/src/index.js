import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {

  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}

const Total = (props) => {

  return (
    <div>
      <p>Total amount of exercises: {props.exercises}</p>
    </div>
  )
}
const Content = (props) => {
  console.log('props', props)
  console.log('props', props)
  console.log('part1', props.part1)
  console.log('exercises', props.exercises)
  console.log('part2', props.part2)
  console.log('exercises', props.exercises)
  console.log('part3', props.part3)
  console.log('exercises', props.exercises)

  return (

    <div>
      <p>{props.part}, {props.exercises}</p>


    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14,
  }


  const exercises = 'exercises'


  return (
    <div>
      <h1>
        <Header course={course} />
      </h1>

      <Content part={part1.name} exercises={part1.exercises} />
      <Content part={part2.name} exercises={part2.exercises} />
      <Content part={part3.name} exercises={part3.exercises} />

      <Total exercises={part1[exercises] + part2[exercises] + part3[exercises]} />

    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))