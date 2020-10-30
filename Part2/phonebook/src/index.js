import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const names = [
    {


    }
]
ReactDOM.render(<App names={names} />, document.getElementById('root'))

ReactDOM.render(<App names={names} />, document.getElementById('root'))
const result = names.map(name => name.name)
console.log(result)