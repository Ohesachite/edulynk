// this is code for our main feature: finding ways to upload
//math problems

/*
This is a dynamic form, meaning that the user will
be able to decide how many inputs they want
*/

import React, {Component} from "react";

class ProblemInput extends Component{
    render(){
        return(
            <form>
                <label htmlFor="problem">Type in the problem here: </label>
                <input type="text" name="problem" id="problem"/>
                <label htmlFor="answer">Set your answer for Autograding </label>
                <input type="text" name="answer" id="answer"/>
                <label htmlFor="point-value">Assign a Point Value </label>
                <input type="number" name="point-value" id="point-value"/>
                <button> Add Problem </button>
                <input type="submit" value="Submit" />
                
            </form>
        )
    }
} export default ProblemInput