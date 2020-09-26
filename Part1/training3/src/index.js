import React from 'react'
import ReactDOM from 'react-dom'

/* const object1 = {
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
console.log(object1['salainen nummero']) */

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

const App = () => (
  <div>
    <p>Hello world</p>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))


/* const t = [1, -1, 3]
const m1 = t.map(value => value * 2)
const m2 = t.map(value => '<li>' + value + '</li>')

console.log(m2)
console.log('ekatee', t)
console.log('m1', m1)

const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // tulostuu 1, 2
console.log(rest)          // tulostuu [3, 4 ,5]



)
*/