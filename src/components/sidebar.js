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
