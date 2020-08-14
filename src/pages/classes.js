 import React, { Component, Fragment } from "react";
import ClassSelector from "../components/ClassSelector.js";
import ProblemInput from "../components/problemInput.js";
import CreateProblem from "../components/createProblem.js";


class Classes extends Component {
   state = {
      currClass: "No Class Selected"
   };

   changeClass = (cls) => {
      this.setState({ currClass: cls.name})
   };
   
   render() {
      return (
         <Fragment>
            <div className="container-fluid">
               <h1 className="mt-4"><ClassSelector changeClass = {this.changeClass} /></h1>
               <h2> {this.state.currClass} </h2> 
               <p><CreateProblem /></p>
               <p><ProblemInput /></p>
            </div>
         </Fragment>
      );
   }
}
export default Classes;
