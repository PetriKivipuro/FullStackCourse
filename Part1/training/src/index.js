import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello world {props.name}, you are {props.age} years old</p>
    </div>
  )
}
const DrawALine = () => {
  return (
    <div>
      <p><b>____________________________________</b></p>
    </div>)
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  const nimi = 'Pate'
  const ikä = 10

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>

      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
      <DrawALine />

      <Hello name="Maija" age={26 + 10} />
      <Hello name="Pekka" />
      <Hello name={nimi} age={ikä} />
      <DrawALine />


    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))