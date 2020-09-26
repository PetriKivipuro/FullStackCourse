import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => props.course

const Content = (props) => {

  console.log('tehtävämääränkunsaistähän', props.parts.exercises)
  return (
    <div>
      <p>{props.parts.name}{', '}{props.parts.exercises}</p>

    </div>
  )
}
/* __________________________________________________________________________________ */
const Total = (props) => {
  console.log('Tähän summa: ', props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises)
  return (
    <div>
      <p>Total amount of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <h1>
        <Header course={course} />
      </h1>

      <Content parts={parts[0]} />
      <Content parts={parts[1]} />
      <Content parts={parts[2]} />


      <Total parts={parts} />



    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))