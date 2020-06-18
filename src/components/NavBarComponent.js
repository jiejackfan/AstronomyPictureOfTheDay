import React from "react";
import {Link} from "react-router-dom";

const NavBarComponent = () =>
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
         <a class="navbar-brand" href="#">STAR MAP</a>

          <ul class="navbar-nav mr-auto">
               <li class="nav-item active">
                <Link to={`/login`}>
                 <a class="nav-link">Login <span class="sr-only">(current)</span></a>
               </Link>
                 </li>
                 <Link to={`/register`}>

               <li class="nav-item">
                 <a class="nav-link">Register</a>
               </li>
 </Link>

             </ul>
        </nav>
    </div>

export default NavBarComponent