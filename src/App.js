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
import Profile from "./pages/profile.js";

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
      <div className="d-flex" id="wrapper">
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
              <Route exact path="/classes" component={Classes}></Route>
              <Route exact path="/profile" component={Profile}></Route>
              <Route component={Error}></Route>
            </Switch>
          </Router>
        </div>
      </div>
    </Fragment>
   );
}
export default App;
