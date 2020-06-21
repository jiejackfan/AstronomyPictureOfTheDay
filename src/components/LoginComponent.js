import React from 'react';
import {login} from "../services/UserService";
import {Link} from "react-router-dom";
import Background from './pick.jpg';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import  "./Footer.css";
export default class LoginComponent extends React.Component {

    state = {
        username: '',
   password: '',
          invalidCredentials: false

    }
componentDidMount = () => this.props.authenticatedUser ||
        UserService.findLoggedInUser().then(user => this.props.logInUser(user))


        //new

    handleSubmit = ev => {
        ev.preventDefault()
        if (this.state.email && this.state.password) {
            let credentials = {
                email: this.state.email,
                password: this.state.password
            }
            UserService.logInUser(credentials).then(user => {
                if (user) {
                    this.props.logInUser(user)
                } else {
                    this.setState({invalidCredentials: true})
                }
            })
        }
    }
    //new
    login = () => {
        fetch("https://fan-free-joshi-server.herokuapp.com/api/login"
            /*"http://localhost:8080/api/login"*/, {
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
  this.props.authenticatedUser ?
        <Redirect to="/" /> :

         <div className="container" >
         <form>
          <font color={'white'}>
                                <h1 style={{backgroundImage: `url(${Background})`}}> &nbsp;&nbsp;Login</h1>
                                 </font>
   <FormGroup>
        <Label for="exampleEmail">Email</Label>

                                <input
                                    onChange={(e) => this.setState({username: e.target.value})}
                                    className="form-control"
                                    type="email" name="email"
                                    />
                                       </FormGroup>
                                        <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                <input
                                    onChange={(e) => this.setState({password: e.target.value})}
                                    className="form-control"
                                     type="password" name="password"
                                    />
                                     </FormGroup>
                                <button
                                    onClick={this.login}
                                    className="btn btn-primary">
                                    Login
                                </button>
                                <p className="text-right">
                                <Link to="/register" >Sign up</Link>
                                </p>
                                 </form>

  <footer style={{backgroundImage: `url(${Background})`}}
   className='footer mt-auto py-3 bg-dark text-white footercss'>

                             <div class="container ">
                                       <div class="row row-30">
                                         <div class="col-md-4 col-xl-5">
                                           <div class="pr-xl-4"><a class="brand" >
                                           </a>
                                             <p>We are an online platform that encourages astronomical adventures from your own screen .</p>

                                             <p class="rights"><span>©  </span><span class="copyright-year">2020</span><span> </span><span>Fan-Free-Joshi</span><span>. </span><span>All Rights Reserved.</span></p>
                                           </div>
                                         </div>
                                         <div class="col-md-4">
                                           <h5>Contacts</h5>
                                           <dl class="contact-list">
                                             <dt>Address:</dt>
                                             <dd>780 Columbus  Avenue, Boston, MA </dd>
                                           </dl>
                                           <dl class="contact-list">
                                             <dt>email:</dt>
                                             <dd> starmaps@gmail.com </dd>
                                           </dl>
                                           <dl class="contact-list">

                                           </dl>
                                         </div>
                                         <div class="col-md-4 col-xl-3">
                                          <h5>Links</h5>
                                         <dl class="link-list">

                                          <dt>

                                            <Link to="/privacy">
                                                  <font color={'white'}>
                                                Privacy Policy
                                                             </font>
                                                  </Link>

                                                   </dt>

                                                   </dl>
                                                               <ul class="nav-list">
                                            <span className="btn-icon btn-info btn-round"
                                            >
                                                                        <i className="btn fa fa-facebook-square btn-danger"></i>
                                                                      </span>
                                                                      &nbsp;&nbsp;
                                                                      <span
                                                                        className="btn-icon btn-round "


                                                                      >
                                                                        <i className="btn fa fa-twitter btn-danger"></i>
                                                                      </span>

                                           </ul>
                                         </div>
                                       </div>
                                     </div>

                           </footer>

</div>
                      );
                      }
                      }
