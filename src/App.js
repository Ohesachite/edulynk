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
      <div>
        {/* <Switch>
         <Route exact path="/" component={Home} />
        </Switch> */}
        <Header />
        <Sidebar />
        <h1>Hello World!</h1>
        <footer className="App-footer">
          <p>Author: John Doe</p>
        </footer>
      </div>

    );
  }
}

export default App;
