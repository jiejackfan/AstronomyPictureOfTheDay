import React from 'react';
import {register} from "../services/UserService";
import {Link} from "react-router-dom";
import Background from './pick.jpg';

export default class Register extends React.Component {
    state = {
        username: '',
        password: '',
        email: ''
    }

 register = () => {
     fetch("https://fan-free-joshi-server.herokuapp.com/api/register", {
       body: JSON.stringify({
         email: this.state.email,
         username: this.state.username,
         password: this.state.password
       }),
       headers: {
         'content-type': 'application/json'
       },
       method: 'POST',
       credentials: "include"
     }).then(response => response.json())
       .catch(e => {
         this.setState({
           error: 'Unable to register'
         })
       })
       .then(currentUser => {
         if(currentUser) {
           this.props.history.push("/profile")
         }
       })
   }
                render() {
                    return(
                         <div className=" container ">
                    <form>
                      <font color={'white'}>
                    <h3  style={{backgroundImage: `url(${Background})`}}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    &nbsp;&nbsp;Register
                     <Link to="/home">
                     <i class="fa fa-home float-right btn-sm" aria-hidden="true"></i>
                     </Link>
                     </h3>
                      </font>
                     {
                              this.state.error &&
                              <div className="alert alert-ndanger">
                                {this.state.error}
                              </div>
                            }
                       <div className="form-group">
                              <label>Email</label>
                              <input value={this.state.email}
                                         onChange={(e) => this.setState({
                                          email: e.target.value
                                                  })}
                                                  className="form-control"
                                                  placeholder="email@nasa.com"/>
                              <label>User Name</label>
                              <input value={this.state.username}
                                         onChange={(e) => this.setState({
                                          username: e.target.value
                                                  })}
                                                  className="form-control"
                                                  placeholder="astrologyfan101"/>
                                      <label>Password</label>
                                      <input  value={this.state.password}
                                         onChange={(e) => this.setState({
                                           password: e.target.value
                                                     })}
                                                className="form-control"
                                                type="password"
                                      placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"/>
                                              </div>


<Link to="/profile">
  <button type="submit" className="btn btn-success btn-block"
                  onClick={() => this.register(this.state)}
                     >
                    Register
            </button>
                   </Link>
                 <p className="forgot-password text-right">
                             <Link to="/login">Sign in?</Link>
                 </p>
</form>
</div>
                      );
                      }
                      }