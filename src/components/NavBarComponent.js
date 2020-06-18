import React from "react";
import {Link} from "react-router-dom";
import { useState } from 'react';
import Background from './pic.jpg';

import {
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
    <div>



  <div class="container" style={{paddingBottom: 50}} >
        <div className="navbar navbar-expand-lg navbar-light  bg-light"

        style={{backgroundImage: `url(${Background})`}}>

 <NavbarBrand className="mb-0 h1"href="/" >
  <font color={'white'}>
 <h1>
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
                 <Link to={`/register`}>

               <li class="nav-pills pull-right" style={{paddingLeft: 50}}>
               <font color={'white'}>
                Register
                  </font>
               </li>
 </Link>


             </ul>
                    </Collapse>

       </div>


        </div>


    </div>
)

}
export default NavBarComponent