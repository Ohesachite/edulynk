import React, { Component } from "react";
import "../assets/sidebar.css";
import { Link, BrowserRouter } from 'react-router-dom';
import GoogleBtn from "./GoogleBtn.js";

function Sidebar () {
   return (
      <BrowserRouter>
      <div className="d-flex" id="wrapper">
         <div className="bg-info border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">Edulynk </div>
            <div className="list-group list-group-flush"> 
            <GoogleBtn />
               <a
                  className="text-light list-group-item list-group-item-action bg-info"
                  onClick={()=>{window.location.href = '/';}}
               >Dashboard
                  
               </a>

               <a
                  className="text-light list-group-item list-group-item-action bg-info"
                  onClick={()=>{window.location.href = '/classes';}}
               >Classes   
               </a>

               <a
                  href="#"
                  className="text-light list-group-item list-group-item-action bg-info"
                  onClick={()=>{window.location.href = '/profile';}}
               >Profile
               </a>
               <a
                  href="#"
                  className="text-light list-group-item list-group-item-action bg-info"
                  onClick={()=>{window.location.href = '/settings';}}
               >Settings
               </a>
               
            </div>
         </div>
      </div>
      </BrowserRouter>
      
   );
}
export default Sidebar;
