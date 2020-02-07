import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
            <a className="App-link" href="/graph">
                Line Graphs
            </a>
            <hr/>
            <a className="App-link2" href="/users-posts">
                Posts Users
            </a>
        </div>
      </header>


    </div>
  );
}

export default App;
