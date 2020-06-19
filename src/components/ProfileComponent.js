import React from "react";
import {Link} from "react-router-dom";
import Background from './pick.jpg';
export default class ProfileComponent extends React.Component {

    state={
        user:{
            username:'',
            password:'',
            email:'',
            dateOfBirth:'',
            isAdmin:0,
            phone:'',
            posts:[]
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/profile",{
            method:"POST",
            credentials:"include"
        }).then(response=>response.json())
            .catch(e=>{this.props.history.push("/")})
            .then(user=>{
                if(user)
                    this.setState({user:user})
            })
    }


    update = () => {
        fetch("http://localhost:8080/api/profile", {
            body: JSON.stringify(this.state.user),
            headers: {
                'content-type': 'application/json'
            },
            method: 'PUT',
            credentials: "include"
        })
            .then(response => response.json())
            .then(user => this.setState({
                user:user
            }))
    }

    logout=()=>{
        fetch("http://localhost:8080/api/logout", {
            method: 'POST',
            credentials: "include"
        })
            .then(response => this.props.history.push("/"))
    }

    render() {
        return(
            <div className=" container ">
             <font color={'white'}>
                <h1 style={{backgroundImage: `url(${Background})`}}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    &nbsp;&nbsp;Profile
                    <Link to="/home">
                           <i class="fa fa-home float-right btn-sm" aria-hidden="true"></i>
                           </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;</h1>
                 </font>


                <div className="alert alert-success wbdv-message" role="alert">
                    Profile successfully saved
                </div>

                <div>
                    <div className="form-group row">
                        <label htmlFor="usernameFld"
                               className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input id="usernameFld"
                                   type="text"
                                   className="form-control wbdv-field wbdv-username"
                                   placeholder="jiejackfan"
                                   title="Use this to login"
                                   value={this.state.user.username}
                                   readOnly/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="passwordFld"
                               className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input id="passwordFld"
                                   type="password"
                                   value={this.state.user.password}
                                   onChange={e=>this.setState({user:{password:e.target.value}})}
                                   className="form-control wbdv-field wbdv-password"
                                   title="Enter the password you set for this account"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="phoneFld"
                               className="col-sm-2 col-form-label">Phone</label>
                        <div className="col-sm-10">
                            <input id="phoneFld"
                                   type="text"
                                   value={this.state.user.phone}
                                   onChange={e=>this.setState({user:{phone:e.target.value}})}
                                   className="form-control wbdv-field wbdv-phone"
                                   title="Enter your phone number"
                                   placeholder="(617)-309 0330"
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="emailFld"
                               className="col-form-label col-sm-2">
                            Email
                        </label>
                        <div className="col-sm-10">
                            <input type="email"
                                   className="form-control wbdv-field wbdv-email"
                                   id="emailFld"
                                   value={this.state.user.email}
                                   onChange={e=>this.setState({user:{email:e.target.value}})}
                                   title="Enter your email address"
                                   placeholder="fan.jie1@husky.neu.edu"
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="roleFld"
                               className="col-form-label col-sm-2">
                            Profile Type
                        </label>
                        <div className="col-sm-10">
                            <select className="form-control wbdv-field wbdv-role"
                                    onChange={event => {

                                    }}
                                    id="roleFld">
                                <option value="USER">Student</option>

                                <option value="ADMIN">Admin</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="dobFld"
                               className="col-form-label col-sm-2">
                            Date of birth
                        </label>
                        <div className="col-sm-10">
                            <input type="date"
                                   value={this.state.user.dateOfBirth}
                                   onChange={e=>this.setState({user:{dateOfBirth:e.target.value}})}
                                   className="form-control wbdv-field wbdv-dob"
                                   id="dobFld"
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-form-label col-sm-2"/>
                        <div className="col-sm-10">
                            <button className="form-control btn btn-success btn-block wbdv-button wbdv-update"
                                    onClick={this.update}>
                                Update
                            </button>
                            <button className="form-control btn btn-danger btn-block wbdv-button wbdv-logout"
                                    onClick={this.logout}>
                                Logout
                            </button>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}