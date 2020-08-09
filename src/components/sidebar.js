<<<<<<< HEAD
import React, { Component } from "react";
import "../assets/sidebar.css";

class Sidebar extends Component {
   render() {
      return (
         <div className="d-flex" id="wrapper">
            <div class="bg-info border-right" id="sidebar-wrapper">
               <div class="sidebar-heading">Start Bootstrap </div>
               <div class="list-group list-group-flush">
                  <a
                     href="#"
                     class="text-light list-group-item list-group-item-action bg-info"
                  >
                     Dashboard
                  </a>
                  <a
                     href="#"
                     class="text-light list-group-item list-group-item-action bg-info"
                  >
                     Classes
                  </a>
                  <a
                     href="#"
                     class="text-light list-group-item list-group-item-action bg-info"
                  >
                     Students
                  </a>
                  <a
                     href="#"
                     class="text-light list-group-item list-group-item-action bg-info"
                  >
                     Profile
                  </a>
                  <a
                     href="#"
                     class="text-light list-group-item list-group-item-action bg-info"
                  >
                     Settings
                  </a>
               </div>
            </div>
         </div>
      );
   }
}
export default Sidebar;
=======
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/sidebar.css';


class Sidebar extends Component {
    render() {
        return (
            //HTML Stuff HERE

                < div className = "d-flex" id = "wrapper" >
                    <div className="bg-light border-right" id="sidebar-wrapper">
                        <div className="sidebar-heading">Side Menu </div>
                        <div className="list-group list-group-flush">
                            <a href="#" className="list-group-item list-group-item-action bg-light">Classes Home</a>
                            <a href="#" className="list-group-item list-group-item-action bg-light">Class 1</a>
                            <a href="#" className="list-group-item list-group-item-action bg-light">Class 2</a>
                            <a href="#" className="list-group-item list-group-item-action bg-light">Class 3</a>
                            <a href="#" className="list-group-item list-group-item-action bg-light">Settings</a>
                            <a href="#" className="list-group-item list-group-item-action bg-light">Calendar</a>
                        </div>
                    </div>
            </div >

            //end of HTML stuff



        );
    }

} export default Sidebar;
>>>>>>> 28a4e83b8c69602fbe475a8919c8881362e15de2
