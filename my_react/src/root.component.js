import React from "react";
import './App.css';

export default function Root(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src="http://localhost:8080/public/logo.png"
          className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
