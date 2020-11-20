import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EnterCountry from './components/EnterCountry';

ReactDOM.render(<App EnterCountry={EnterCountry} />, document.getElementById('root'))