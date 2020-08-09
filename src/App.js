import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Sidebar from "./components/sidebar.js";
//import Header from "./components/header.js";
import Login from "./login.js";
import googleButton from './googleButton.js'

class App extends Component {
  render() {
    /*return (
      <div>
        { <Switch>
         <Route exact path="/" component={Home} />
        </Switch> }
        <h1>Hello World!</h1>       
        <Header />
        <Sidebar />
        <footer className="App-footer">
          <p>Author: John Doe</p>
        </footer>
      </div>

    );*/
    return (
      <div>
        <h1>Hello World</h1>
        <Login />
        <googleButton />
      </div>
    );
  }
}

export default App;
