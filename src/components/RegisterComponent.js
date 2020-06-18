import React from 'react';
import {register} from "../services/UserService";
import {Link} from "react-router-dom";
export default class Register extends React.Component {
    state = {
        username: '',
        password: '',
        verifyPassword: ''
    }
 register = (user) =>
         register(user)
             .then(newUser => this.props.history.push('/profile'))


                render() {
                    return(
                    <form>
                    <h3> Register </h3>
                       <div className="form-group">
                              <label>User Name</label>

                              <input value={this.state.username}
                                         onChange={(e) => this.setState({
                                          username: e.target.value
                                                  })}
                                                  className="form-control"
                                                  placeholder="username"/>
                                    </div>
                             <div className="form-group">
                                      <label>Password</label>
                                      <input  value={this.state.password}
                                         onChange={(e) => this.setState({
                                           password: e.target.value
                                                     })}
                                                className="form-control"
                                                type="password"
                                      placeholder="Enter password"/>
                                              </div>
 <div className="form-group">
                           <label>Verfiy Password</label>
                            <input
                                               value={this.state.verifyPassword}
                                               onChange={(e) => this.setState({
                                                   password: e.target.value
                                               })}
                                               className="form-control"
                                               type="password"
                                               placeholder="Enter password"/>
        </div>


  <button type="submit" className="btn btn-primary btn-block"
                  onClick={() => this.register(this.state)}
                     >
                  Register </button>
                 <p className="forgot-password text-right">
                             <Link to="/login">Sign in?</Link>
                 </p>
</form>
                      );
                      }
                      }