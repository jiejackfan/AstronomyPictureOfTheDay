import React from "react";
import {Link} from "react-router-dom";
import { useState } from 'react';
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

const NavBarComponent = () =>{
const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>


  <div class="container-fluid" style={{paddingBottom: 50}} >
        <div className="navbar navbar-expand-lg navbar-light  bg-light">
 <NavbarBrand href="/">STAR MAP</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

  <ul class="navbar-nav mr-auto">
  <li class="nav-item">
         <Link to={`/about`}>
         <a class="nav-link" href="#">About</a>
</Link>
</li>
               <li class="nav-pills pull-right ">
                <Link to={`/login`}>
                 <a class="nav-link">Login <span class="sr-only">(current)</span></a>
               </Link>
                 </li>
                 <Link to={`/register`}>

               <li class="nav-pills pull-right">
                 <a class="nav-link">Register</a>
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