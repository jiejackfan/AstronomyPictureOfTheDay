import React from "react";
import {Link} from "react-router-dom";
import Background from './pick.jpg';
export default class ProfileComponent extends React.Component {
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
                                   readOnly/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="passwordFld"
                               className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input id="passwordFld"
                                   type="password"
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
                                   className="form-control wbdv-field wbdv-dob"
                                   id="dobFld"
                                   value="2020-05-08"
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-form-label col-sm-2"></label>
                        <div className="col-sm-10">
                            <button className="form-control btn btn-success btn-block wbdv-button wbdv-update">
                                Update
                            </button>
                            <a className="form-control btn btn-danger btn-block wbdv-button wbdv-logout"
                               href="../index.html">
                                Logout
                            </a>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}