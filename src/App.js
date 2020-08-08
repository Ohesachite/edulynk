import React, { Component } from 'react';
import './App.css';
//import Sidebar from "./components/sidebar";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello world!</h1>
          <p>Sujit needs to work on his personal account.</p>
        </header>
        <h1>Not in header or footer</h1>
        <p>What's up</p>
        <p>Hello world!</p>
        <p>Goodbye world!</p>
        <footer className="App-footer">
          <p>Author: John Doe</p>
        </footer>
      </div>
    );
  }
}

export default App;