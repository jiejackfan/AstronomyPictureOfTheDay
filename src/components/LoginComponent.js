import React from 'react';
import {login} from "../services/UserService";
import {Link} from "react-router-dom";
import Background from './pick.jpg';

import  "./Footer.css";
export default class LoginComponent extends React.Component {

    state = {
        username: '',
        password: ''
    }

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
        return ( <div>
                                <h1>Login</h1>
                                <input
                                    onChange={(e) => this.setState({username: e.target.value})}
                                    className="form-control"/>
                                <input
                                    onChange={(e) => this.setState({password: e.target.value})}
                                    className="form-control"/>
                                <button
                                    onClick={this.login}
                                    className="btn btn-primary">
                                    Login
                                </button>
                                <Link to="/register">Sign up</Link>
                            </div>
                        );
                    }
                }