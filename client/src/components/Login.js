import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { GoogleLogin } from 'react-google-login';
import eventbus from 'eventbusjs';

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_form:true,
            component_name:"login",
            fields: {
                userId: null,
                isLoggedIn: false
            },
            errors: {},
        }
    }
    handleSubmit(event) {
        console.log("submit-pass", this.state.fields)
        event.preventDefault();
    }
    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }
    render() {
        let loginContent;
        let style;
        
        if (this.state.isLoggedIn) {
            style = this.state.show_form ? {}:{display:"none"}
        } else {
            loginContent = (
                <form onSubmit= {this.handleSubmit.bind(this)}>

                <label>
                  Email:
                  <input className="form-group" name="gmail" type="email" placeholder="Enter Your E-Mail" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["gmail"]}/>
                  <input name="password" type="password" placeholder="Enter Your Password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}/>
                </label>
                <input type="submit" value="Login" />
                </form>
            )    
                
        }
        return (<div>{loginContent}</div>)
    }
}