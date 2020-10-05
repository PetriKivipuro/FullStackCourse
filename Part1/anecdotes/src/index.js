import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const Buttons = (props) => {
  /*  console.log('number', Math.floor(Math.random() * anecdotes.length)) */
  return (
    <div>
      <Button onClick={props.vote} text='Vote' />
      <Button onClick={props.selected} text='Next anecdote' />
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(0)
  const giveRandom = () => setSelected(selected + 1)
  const giveVote = () => setVote(vote + 1)


  const number = anecdotes[Math.floor(Math.random() * anecdotes.length)]


  console.log('number', number)
  return (
    <div>

      <div>{number}</div>
      <div>Has {vote} votes</div>
      <Buttons vote={giveVote} selected={giveRandom} />

    </div>
  )
}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)