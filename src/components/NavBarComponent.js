import React from "react";
import {Link} from "react-router-dom";

const NavBarComponent = () =>
    <div>
     <div className="banner ">
      <h1 className="logo-font float-center" >
               Star Map
             </h1>
  <p>See the stars</p>
        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
         <Link to={`/about`}>
         <a class="navbar-brand" href="#">About</a>
</Link>
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
   </div>
export default NavBarComponent