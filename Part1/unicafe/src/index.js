import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
console.log('props good amount tähän', props.good)

return(
<div>
<h2>Statistics</h2>
 
 good: {props.good}



</div>
)
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const kasvataYkshyva = () => setGood(good + 1)
  const kasvataYksnetrl = () => setNeutral(neutral + 1)
  const kasvataYksbad = () => setBad(bad + 1)
  console.log('good', good,'neutra', neutral,'bad', bad)
  
  const total = good+bad+neutral


  return (
    <div>
      <h1>Give feedback</h1>

      <button onClick={kasvataYkshyva}>
        good
      </button>

      <button onClick={kasvataYksnetrl}>
        neutral
      </button>

      <button onClick={kasvataYksbad}>
        bad
      </button>

      <Statistics/>

     <div>neutral: {neutral}</div>
<div>bad: {bad}</div>
<div>all: {total} </div>
<div>average: {(good-bad)/(total)} </div>
<div>positive: {good/(total)*100} %</div>



    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)