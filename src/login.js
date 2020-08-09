import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Fade  } from 'reactstrap';
//import React from 'react';
import ReactDOM from 'react-dom';
//import { GoogleLogin } from 'react-google-login';

const validationMethods =  {
    required : (field, value) => {
        if (!value.toString().trim().length) {
            return  `This ${field} field is required.`
        }
    }
}

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            userid: '',
            password: ''
        }
    }

    login = (event) => {
 
        event.preventDefault();
 
        const email = this.state.email;
        const password = this.state.password;
    }

    handleChange = (event) => {
        const target = event.target;
        const field =  target.name;
        const value = target.value;
    }

    render(){
        return (
            <div className="Login">
                <Form id="loginForm" method="post" onSubmit={this.login}>
                    <FormGroup>
                        <Label for="userid">Username</Label>
                        <Input
                            type="text"
                            validations={['required']}
                            name="userid"
                            value={this.state.userid}
                            onChange={this.handleChange}
                            id="userid"
                            placeholder="Enter your userid."
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            validations={['required']}
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            id="password"
                            placeholder="Enter your password."
                        />
                    </FormGroup>
                    <Button>Login</Button>
                </Form>
            </div>
        );
    }
}

export default Login