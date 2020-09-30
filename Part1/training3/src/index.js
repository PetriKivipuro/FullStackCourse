import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = props => {
  const [value, setValue] = useState(0)

  const setToValue = newValue => {
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="add thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

/*
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used py pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)


const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }


  console.log('oikee', right)
  console.log('vasen', left)

  return (
    <div>
      <div>
        {left}
        <Button onClick={handleLeftClick} text='left' />
        <Button onClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks} />
      </div>
    </div>
  )
} */

/*

C osan loppppua

const Display = ({ counter }) => <div>{counter}</div>
const Button = ({ handleClick, text }) =>
  <button onClick={handleClick}>{text}</button>


const App = (props) => {
  const [counter, setCounter] = useState(0)

  const kasvataYhdella = () => setCounter(counter + 1)
  const asetaNolla = () => setCounter(0)
  const miinusYX = () => setCounter(counter - 1)
  console.log('render', counter)
  return (
    <div>
      <Display counter={counter} />
      <Button
        handleClick={kasvataYhdella}
        text='plus'
      />
      <Button handleClick={asetaNolla}
        text='nolla'
      />
      <Button handleClick={miinusYX}
        text='miinus'
      />

    </div >
  )
}


plus ja nolla napit part1 c osa

import React, { useState } from 'react'
import ReactDOM from 'react-dom'





const App = (props) => {
  const [counter, setCounter] = useState(0)

  console.log('clikked')


  return (
    <div>
      <div>
        {counter}
      </div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
    </button>
      <button onClick={() => setCounter(0)}>
        nolla
    </button>

    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))


 */

// alempana b osan testailua






































/* const Hello = ({ name, age }) => {
  const botnYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probalbly born {botnYear()}
      </p>
    </div>
  )
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
    </div>
  )
}

const t = [1, -1, 3]
const m1 = t.map(value => value * 2)
const m2 = t.map(value => '<li>' + value + '</li>')

console.log(m2)
console.log('ekatee', t)
console.log('m1', m1)

const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // tulostuu 1, 2
console.log(rest)          // tulostuu [3, 4 ,5]

const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'Filosofian tohtori',
}

const object2 = {
  name: 'Full Stack -websovelluskehitys',
  level: 'aineopinto',
  size: 5,
}

const object3 = {
  name: {
    first: 'Juha',
    last: 'Tauriainen',
  },
  grades: [2, 3, 5, 3],
  department: 'TKTL',
}

console.log(object1.name)         // tulostuu Arto Hellas
const fieldName = 'age'
console.log(object1[fieldName])    // tulostuu 35
object1['salainen nummero'] = 123456
console.log(object1['salainen nummero'])

const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}

const result = sum(1, 5)
console.log('tulos', result)

const square = p => p * p

const vast = square(4)
console.log(vast)

const t = [1, 2, 3]
const tsquared = t.map(p => p * p)

console.log(tsquared)

function product(a, b) {
  return a * b
}

const vastaus = product(2, 6)
console.log('tämmmönen vastaus', vastaus)

const ka = function (a, b) {
  return (a + b) / 2
}

const vastaus2 = ka(2, 5)
console.log('vast2', vastaus2)



)
*/