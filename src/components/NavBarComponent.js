import React from "react";
import {Link} from "react-router-dom";

const NavBarComponent = () =>
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={`/login`}>
                <button className="btn btn-success float-right">Login</button>
            </Link>
            <Link to={`/register`}>
                <button className="btn btn-danger">Register</button>
            </Link>
        </nav>
    </div>

export default NavBarComponent