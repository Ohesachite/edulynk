import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from "./components/sidebar.js";
import Header from "./components/header.js";
import Login from "./login.js";
import {Fragment} from 'react';
import GoogleBtn from './GoogleBtn.js';
 

class App extends Component {
  render() {
    
    return(
      <Fragment> 
      <div>
  {/* //      { <Switch>
   //      <Route exact path="/" component={Home} />
   //     </Switch> } */}
        <h1>Welcome to Edulynk!</h1>
        <Header />
        <Sidebar />
        <footer className="App-footer">
          <p>Created at HackThis</p>
        </footer>
      </div>
     // <div>
    //    <Login />
          <GoogleBtn />
    //  </div>
    </Fragment>
    );
  }
}

export default App;
