import React from 'react';
import {login} from "../services/UserService";
import {Link} from "react-router-dom";

export default class Login extends React.Component {

 state = {
        username: '',
        password: ''
    }

  login = () => {
     fetch("http://localhost:8080/api/login", {
       body: JSON.stringify({
         username: this.state.username,
         password: this.state.password}),
       headers: {
         'content-type': 'application/json'
       },
       method: 'POST',
       credentials: "include"
     }).then(response => response.json())
       .catch(e => {
         this.props.history.push("/login")
       })
       .then(currentUser => {
         if(currentUser)
           this.props.history.push("/profile")
       })

   }
render() {
        return (
<form>

<h3> Login </h3>
 <div className="form-group">
        <label>Username</label>
        <input    placeholder="Enter User Name"
                  onChange={(e) => this.setState({username: e.target.value})}
                  className="form-control"/>

                </div>
 <div className="form-group">
                    <label>Password</label>
                    <input   type="password"
                    placeholder="Enter password"
                              onChange={(e) => this.setState({password: e.target.value})}
                              className="form-control"/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block"
                             onClick={() => this.login(this.state)}>
                             <Link to="/profile">Sign up</Link>
                 Sign in</button>
                <p className="forgot-password text-right">
                      <Link to="/register">Sign up</Link>
                </p>
            </form>
);
}
}
