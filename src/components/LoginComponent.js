import React from 'react';
import {login} from "../services/UserService";
import {Link} from "react-router-dom";
import Background from './pick.jpg';

import  "./Footer.css";
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
        <div className="container" >
<form style={{backgroundColor: "#F0FFFF"},{paddingBottom: 300}} >
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
                        <label>Username</label>
                        <input placeholder="Enter User Name"
                               onChange={(e) => this.setState({username: e.target.value})}
                               className="form-control"/>

                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"
                               placeholder="Enter password"
                               onChange={(e) => this.setState({password: e.target.value})}
                               className="form-control"/>
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>


                <button type="submit" className="btn btn-danger btn-block"
                             onClick={() => this.login}>

                 Sign in</button>
                <p className="forgot-password text-right">
                      <Link to="/register">Sign up</Link>
                </p>
            </form>
              <footer style={{backgroundImage: `url(${Background})`}
            } className='footer mt-auto py-3 bg-dark text-white footercss'>

                                         <div class="container">
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
