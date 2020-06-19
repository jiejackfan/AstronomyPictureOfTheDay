import React from "react"
import  "./Footer.css";
import Center from 'react-center';
import {Link} from "react-router-dom";
import './Home.css'
import {
Jumbotron,
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Spinner,
  ReactCenter,
} from "reactstrap";



export default class HomeComponent extends React.Component {
    render = () => {
      return (

<div className="cover" style={{position: 'fixed'},{backgroundColor: "black" }}>
 <div className="text-lowercase font-italic font-weight-light " style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
  <font color={'white'}>
     <h1> Step into the World of Stars </h1>

      </font>
                &nbsp;&nbsp;
                <Link to={`/search`}>

                <i className=" fa fa-rocket btn-lg fa-2x" aria-hidden="true"  style={{color:"white"}}
                >
                </i>
                 </Link>

 </div>
 </div>




      )
    }
}