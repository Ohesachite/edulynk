import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import './App.css';
// import './components/Bootstrap/css/s'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from "./components/sidebar.js";
import Header from "./components/header.js";



class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        {/* <Switch>
         <Route exact path="/" component={Home} />
        </Switch> */}
        <Header />
        <Sidebar />
        <h1>Hello World!</h1>
=======
      <div className="App">
        <header className="App-header">
          <h1>Hello world!</h1>
          <p>Sujit needs to work on his personal account.</p>
        </header>
        <h1>Not in header or footer</h1>
        <p>What's up</p>
        <p>Hello world!</p>
        <p>Goodbye world!</p>
>>>>>>> fb5e562bb881c0ab5851536ea64c16056fcb4331
        <footer className="App-footer">
          <p>Author: John Doe</p>
        </footer>
      </div>

    );
  }
}

export default App;
