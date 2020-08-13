import React, { Component } from "react";
import "../assets/login.css";

class Registration extends Component {
    render() {
        return (
            <div className="Register" id="login-wrapper">
               <form>
                  Username:<br />
                  <input type = "text" id = "username" name = "username"></input><br />
                  Password:<br />
                  <input type = "password" id = "password" name = "password"></input><br />
                  <input type = "submit" value = "Register"></input><br />
               </form>
            </div>
         );
    }
}

export default Registration;