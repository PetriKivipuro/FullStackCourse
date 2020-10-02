import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
<button onClick={onClick}>
{text}
</button>
)

const Buttons = (props) => {
return (
<div>
<Button onClick={props.good} text='good'/>
<Button onClick={props.neutral} text='neutral'/>
<Button onClick={props.bad} text='bad'/>
</div>
)}

const Statistic =(props) => {
return (
<div>{props.text} {props.value} {props.text2}</div>
)
}

const Statistics = (props) => {
const total = props.good+props.bad+props.neutral

if( total ===0){

return(
<div>
<h1>Statistics</h1>
<p>No feedback given</p>
</div>
)
}

return(
<div>
<h1>Statistics</h1>
  
<Statistic text="good: " value={props.good}/>
<Statistic text="neutral: " value={props.neutral}/>
<Statistic text="bad: " value={props.bad}/>
<Statistic text="total: " value={total}/>
<Statistic text="average: " value={(props.good-props.bad)/(total)}/>
<Statistic text="positive: " value={props.good/(total)*100} text2='%'/>
   
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
      <Buttons  good={kasvataYkshyva} neutral={kasvataYksnetrl} bad={kasvataYksbad}/>
      <Statistics good={good} neutral= {neutral} bad={bad} noFeedback={noFeedback}/>
     </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)