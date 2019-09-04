import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import eventbus from 'eventbusjs';
import { GoogleLogout } from 'react-google-login';

export default class facebook extends Component {
    state = {
        isLoggedIn: false,
        show_form:true,
        userId: "",
        name: "",
        email: "",
        profile_img: ""
    }
    componentClicked = () => {
        console.log("clicked")
    }
    responseFacebook = (response) => {
        console.log("response" + JSON.stringify(response));
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url,
        });

    }
    logout=()=>{
        console.log("facebook logout success")
    }
    render() {
        let fbContent, style;
        if (this.state.isLoggedIn) {
             style = this.state.show_form ? {}:{display:"none"}
            fbContent = (
                 <div
                      style={{
                        width: "400px",
                        margin: "auto",
                        background: "#f4f4f4",
                        padding: "20px"
                      }}
                >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
           <GoogleLogout clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com" buttonText="Logout"onLogoutSuccess={this.logout}>
       </GoogleLogout>
        <button> delete account</button>
        </div>

            );
        } else {
            fbContent = (<FacebookLogin
                appId="255687208149606"
                autoLoad={false}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />)

        }
        return (<div>{fbContent}</div>)
    }
}