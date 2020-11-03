import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const names = [
    {
        name: 'Artoo Hellas'

    }
]
ReactDOM.render(<App names={names} />, document.getElementById('root'))
