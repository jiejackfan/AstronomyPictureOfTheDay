import React from 'react';
import {Link} from "react-router-dom";
import  "./Footer.css";

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
} from "reactstrap";
import Background from './pick.jpg';
const AboutComponent = () =>{

return (
    <div>
      <Jumbotron>
 <h1 className="display-3">
 <i class="fa fa-star" aria-hidden="true"></i>
 About Us</h1>
        <p className="lead">We are a student formed platform that aims to create an engaging community of astronomy enthusiasts.</p>
        <hr className="my-2" />
        <p>NASA’s APOD (Astronomy Picture of the Day) API allows developers to find interesting astronomical pictures by searching criteria like date, keyword, picture quality. The API will return JSON data where each image contains information such as copyright, date released, explanation, picture URL, and version.
        </p>
        <p className="lead">
          <Button color="primary" href="https://apod.nasa.gov/apod/astropix.html">Learn More</Button>
        </p>
        <Link to="/home">
        <button class="fa fa-home float-right btn-lg" aria-hidden="true"></button>
        </Link>
      </Jumbotron>


  <footer style={{backgroundImage: `url(${Background})`}
} className='footer mt-auto py-3 bg-dark text-white footercss'>

                             <div class="container">
                                       <div class="row row-30">
                                         <div class="col-md-4 col-xl-5">
                                           <div class="pr-xl-4"><a class="brand" >
                                           </a>
                                             <p>We are an online platform that encourages astronomical adventures from your own screen .</p>

                                             <p class="rights"><span>©  </span><span class="copyright-year">2020</span><span> </span><span>Fan-Free-Joshi</span><span>. </span><span>All Rights Reserved.</span></p>
                                           </div>
                                         </div>
                                         <div class="col-md-4">
                                           <h5>Contacts</h5>
                                           <dl class="contact-list">
                                             <dt>Address:</dt>
                                             <dd>780 Columbus  Avenue, Boston, MA </dd>
                                           </dl>
                                           <dl class="contact-list">
                                             <dt>email:</dt>
                                             <dd> starmaps@gmail.com </dd>
                                           </dl>
                                           <dl class="contact-list">

                                           </dl>
                                         </div>
                                         <div class="col-md-4 col-xl-3">
                                          <h5>Links</h5>
                                         <dl class="link-list">

                                          <dt>

                                            <Link to="/privacy">
                                                  <font color={'white'}>
                                                Privacy Policy
                                                             </font>
                                                  </Link>

                                                   </dt>

                                                   </dl>
                                                               <ul class="nav-list">
                                            <span className="btn-icon btn-info btn-round"
                                            >
                                                                        <i className="btn fa fa-facebook-square btn-danger"></i>
                                                                      </span>
                                                                      &nbsp;&nbsp;
                                                                      <span
                                                                        className="btn-icon btn-round "


                                                                      >
                                                                        <i className="btn fa fa-twitter btn-danger"></i>
                                                                      </span>

                                           </ul>
                                         </div>
                                       </div>
                                     </div>

                           </footer>
                             </div>
)
}
export default AboutComponent