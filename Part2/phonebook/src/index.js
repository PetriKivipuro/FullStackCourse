import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const names = [
    { name: 'Arto Hellas', number: '123' },
    { name: 'Ada Luvleis', number: '65466' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
]
ReactDOM.render(<App names={names} />, document.getElementById('root'))
