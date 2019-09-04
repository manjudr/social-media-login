import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';

export default class google extends Component {
    state = {
        isLoggedIn: false,
        userId: "",
        name: "",
        email: "",
        profile_img: ""
    }
    componentClicked = () => {
        console.log("clicked")
    }
    responseGoogle = (response) => {
        console.log("response.email" + response)
        console.log("response" + JSON.stringify(response));
        this.setState({
          isLoggedIn: true,
          userID: response.profileObj.googleId,
          name: response.profileObj.name,
          email: response.profileObj.email,
          picture: response.profileObj.imageUrl
        });

    }
    render() {
        let googleContent;
            if (this.state.isLoggedIn) {
            googleContent = (
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
        </div>
            );

        } else {
            googleContent = (<GoogleLogin
            clientId="600854434452-upvpa64g5ibbb1p5t0835oiqml8nvu66.apps.googleusercontent.com"
            buttonText="LOGIN WITH GOOGLE"
            onClick={this.componentClicked}
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
       />)

        }
        return (<div>{googleContent}</div>)
    }
}