import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
const total = props.good+props.bad+props.neutral


if( total ===0){
return(
<div>
<h1>Statistics</h1>

<p>No feedback givennnn</p>
</div>
)
}

return(
<div>
<h1>Statistics</h1>
 
  <div>good: {props.good}</div>
  <div>neutral: {props.neutral}</div>
  <div> bad: {props.bad}</div>
  <div>all: {total}</div>
  <div>average: {(props.good-props.bad)/(total)} </div>
  <div> positive: {props.good/(total)*100} %</div>

</div>
)
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [noFeedback] = useState([])
  
  const kasvataYkshyva = () => setGood(good + 1)
  const kasvataYksnetrl = () => setNeutral(neutral + 1)
  const kasvataYksbad = () => setBad(bad + 1)
  console.log('good', good,'neutra', neutral,'bad', bad)
  
  
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

      <Statistics good={good} neutral= {neutral} bad={bad} noFeedback={noFeedback}/>

     </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)