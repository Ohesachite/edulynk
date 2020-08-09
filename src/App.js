<<<<<<< HEAD
//necessary
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   Redirect,
} from "react-router-dom";
import React, { Component } from "react";
import "./App.css";
import "./index.css";
import { Fragment } from "react";

//navigation+items
import Header from "./components/header.js";
import Sidebar from "./components/sidebar.js";
import Login from "./components/login.js";

//pages
import Classes from "./pages/classes.js";
import Home from "./pages/home.js";
import Error from "./pages/error.js";

//theme+color
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./assets/theme.js";
import { GlobalStyles } from "./assets/global.js";
import { useState } from "react";

function App() {
   const [theme, setTheme] = useState("light");
   const toggleTheme = () => {
      if (theme === "light") {
         setTheme("dark");
      } else {
         setTheme("light");
      }
   };

   return (
      <Fragment>
         <body>
            <div class="d-flex" id="wrapper">
               <Sidebar />
               <div id="page-content-wrapper">
                  <Header />
                  <ThemeProvider
                     theme={theme === "light" ? lightTheme : darkTheme}
                  >
                     <GlobalStyles />
                     <button onClick={toggleTheme}>Toggle theme</button>
                  </ThemeProvider>
                  <Router>
                     <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route
                           exact
                           path="/classes"
                           component={Classes}
                        ></Route>
                        <Route component={Error}></Route>
                     </Switch>
                  </Router>
               </div>
            </div>
         </body>
      </Fragment>
   );
}
=======
import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from "./components/sidebar.js";
import Header from "./components/header.js";
import Login from "./login.js";
import {Fragment} from 'react';
import GoogleBtn from './GoogleBtn.js';
import ClassSelector from './classSelector'

class App extends Component {
  render() {
    
    return(
      <Fragment> 
      <div>
  {/* //      { <Switch>
   //      <Route exact path="/" component={Home} />
   //     </Switch> } */}
        <h1>Welcome to Edulynk!</h1>
        <ClassSelector />
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

>>>>>>> 28a4e83b8c69602fbe475a8919c8881362e15de2
export default App;
