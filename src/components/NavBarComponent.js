import React from "react";
import {Link} from "react-router-dom";
import { useState } from 'react';
import Background from './pick.jpg';
import { IconName } from "react-icons/fa";
import {
Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Jumbotron, Container } from 'reactstrap';

const NavBarComponent = () =>{
const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div >



  <div  class="container-fluid" style={{paddingBottom: 50}} >
        <div className="navbar navbar-expand-lg navbar-dark  bg-dark"

        style={{backgroundImage: `url(${Background})`}}>

 <NavbarBrand className="mb-0 h1"href="/" >
  <font color={'white'}>
 <h1>
 <i class="fa fa-star" aria-hidden="true"></i>
 &nbsp;&nbsp;&nbsp;&nbsp;STAR MAP
</h1>
        </font>
</NavbarBrand>

       <NavbarToggler onClick={toggle} />
               <Collapse isOpen={isOpen} navbar>

  <ul class="navbar-nav mr-auto">
  <li class="nav-item" style={{paddingLeft: 50}}>
         <Link to={`/about`}>
           <font color={'white'}>
         About
              </font>
</Link>
</li>
               <li class="nav-pills pull-right " style={{paddingLeft: 50}}>
                <Link to={`/login`}>
                     <font color={'white'}>
                 Login
                 </font>
               </Link>
                 </li>


               <li class="nav-pills pull-right" style={{paddingLeft: 50}}>
               <Link to={`/register`}>
               <font color={'white'}>
                Register
                  </font>
                  </Link>

               </li>

  <li class="nav-pills pull-right" style={{paddingLeft: 50}}>
               <Link to={`/posts`}>
               <font color={'white'}>
                Posts
                  </font>
                  </Link>

               </li>

             </ul>
              <span
                             className="btn-icon btn-info btn-round"


                           >
                             <i className="btn fa fa-facebook-square btn-danger"></i>
                           </span>
                           &nbsp;&nbsp;
                           <span
                             className="btn-icon btn-round "


                           >
                             <i className="btn fa fa-twitter btn-danger"></i>
                           </span>
                    </Collapse>

       </div>


        </div>


    </div>
)

}
export default NavBarComponent