import React from 'react';
import {register} from "../services/UserService";
import {Link} from "react-router-dom";
import Background from './pick.jpg';
import  "./Footer.css";
import {
Jumbotron,
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Alert,
  Spinner,
  ReactCenter,
} from "reactstrap";
export default class Register extends React.Component {

     state = {
            username: '',
            password: '',
            email: '',
            role: ''
        }
  componentDidMount = () => this.props.authenticatedUser || this.props.setUser()
//handlechange
  onChangeName = ev => this.setState({username: ev.target.value})
    onChangeEmail = ev => this.setState({email: ev.target.value})
    onChangePassword = ev => this.setState({password: ev.target.value})
    onChangeRole = ev => this.setState({role: ev.target.value})
  // to handle submit
  requiredFields = ['username', 'password', 'email', 'role']
  handleSubmit = async ev => {
        ev.preventDefault()

        for (let r in this.requiredFields) {
            let requiredField = this.requiredFields[r]
            $(`#${requiredField}`).removeClass('is-invalid')
            $(`[for=${requiredField}]`).removeClass('text-danger')
        }
        this.setState({isLocationInvalid: false})
        $('#emailInvalidMessage').attr('hidden', true)
        $('#passwordMessage').attr('hidden', true)
        $('#userNameMessage').attr('hidden', true)


        let isValidEmail = emailRegex.test(this.state.email.toLowerCase())
        let isEmailInUse = false
        if (isValidEmail) {
            let userWithEmail = await UserService.findUserByEmail(this.state.email)
            isEmailInUse = userWithEmail.length > 0
        }

        if (this.state.username && isValidEmail && !isEmailInUse &&
            passwordRegex.test(this.state.password) && this.state.role) {
            let user = {
                name: this.state.name,

                email: this.state.email,
                password: this.state.password,
                role: this.state.role
            }
            UserService.createUser(user).then(user => {
                this.props.setUser(user)
                this.props.history.push('/profile')
            })
        } else {
            if (!this.state.name) {
                $('#name').addClass('is-invalid')
                $('[for=name]').addClass('text-danger')
            }

            if (!isValidEmail) {
                $('#email').addClass('is-invalid')
                $('[for=email]').addClass('text-danger')
                $('#emailInvalidMessage').removeAttr('hidden')
            } else if (isEmailInUse) {
                $('#email').addClass('is-invalid')
                $('[for=email]').addClass('text-danger')
                $('#emailExistsMessage').removeAttr('hidden')
            }
            if (!passwordRegex.test(this.state.password)) {
                $('#password').addClass('is-invalid')
                $('[for=password]').addClass('text-danger')
                $('#passwordMessage').removeAttr('hidden')
            }
        }
    }


        register = () => {
            fetch("https://fan-free-joshi-server.herokuapp.com/api/register"
                /*"http://localhost:8080/api/register"*/, {
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
                    if (currentUser) {
                        this.props.history.push("/profile")
                    }
                })
        }
                render() {
                    return(
                         <div className="container ">

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
                     {   this.state.error &&
                              <div className="alert alert-danger">
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


<div className="form-check">
    <input type="checkbox"
 id="exampleCheck1"/>
 <Link to="/privacy">
    <label className="form-check-label" for="exampleCheck1">Agree to Privacy Policy</label>
       </Link>
  </div>


<Link to="/profile">
  <button type="submit" className="btn btn-success btn-block"
                  onClick={this.register}
                     > Register
            </button>
                   </Link>
                 <p className="forgot-password text-right">
                             <Link to="/login">Sign in?</Link>
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

