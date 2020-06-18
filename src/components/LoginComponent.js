import React from 'react';
import {login} from "../services/UserService";
import {Link} from "react-router-dom";
import Background from './pick.jpg';

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
        <div className=" container ">
<form >
 <font color={'white'}>
<h3 style={{backgroundImage: `url(${Background})`}}>
<i class="fa fa-star" aria-hidden="true"></i>
&nbsp;&nbsp;Login
<Link to="/home">
       <i class="fa fa-home float-right btn-sm" aria-hidden="true"></i>
       </Link>
&nbsp;&nbsp;&nbsp;&nbsp;
</h3>

 </font>
 <div style={{paddingTop: 15}} className="form-group">
        <label >Username</label>
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

                <button type="submit" className="btn btn-danger btn-block"
                             onClick={() => this.login(this.state)}>

                 Sign in</button>
                <p className="forgot-password text-right">
                      <Link to="/register">Sign up</Link>
                </p>
            </form>
            </div>
);
}
}
