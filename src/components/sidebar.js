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
