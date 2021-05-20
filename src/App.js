import React from "react";
import axios from "axios";
import "./styles.css";

export default class App extends React.Component {
  state = {
    email: "",
    password:""
  };

  login=()=>{

    axios.post("/login",{
    ...this.state
    })
  
  }

  onInputchange=(event)=> {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <div className="form-container">
        <p>Login Form</p>
        <input name="email" type="text" placeholder="Email" value={this.state.email} onChange={this.onInputchange} />
        <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.onInputchange} />
        <div className="button-submit" onClick={this.login}>
          <p>LOGIN</p>
         
        </div>
        </div>
      </div>
    );
  }
}
