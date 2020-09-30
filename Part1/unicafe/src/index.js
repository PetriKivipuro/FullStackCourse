import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const kasvataYkshyva = () => setGood(good + 1)
  const kasvataYksnetrl = () => setNeutral(neutral + 1)
  const kasvataYksbad = () => setBad(bad + 1)
  console.log('good', good)
  console.log('neutra', neutral)
  console.log('bad', bad)

  return (
    <div>
      <h1>Give feedback</h1>

      <div>{good}</div>
      <button onClick={kasvataYkshyva}>
        good
      </button>

      <div>{neutral}</div>
      <button onClick={kasvataYksnetrl}>
        neutral
      </button>

      <div>{bad}</div>
      <button onClick={kasvataYksbad}>
        bad
      </button>

      <h2>Statistics</h2>


    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)