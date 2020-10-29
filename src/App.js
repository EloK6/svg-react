import React from 'react';
import {FaHippo} from 'react-icons/fa';
import Cake from './Cake';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FaHippo className="App-logo"/>
        <Cake className="App-logo"/>
      </header>
    </div>
  );
}

export default App;
