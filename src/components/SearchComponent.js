import React from 'react';
import {Link} from "react-router-dom";
import NavBarComponent from "./NavBarComponent";
import Background from './pick.jpg';
import { Col,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { IconName } from "react-icons/fa";
// reactstrap components
import {Container } from "reactstrap";
import Footer from "./FooterComponent";
import './footerhome.css';
import {Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

class SearchComponent extends React.Component {


    state = {
        singleDate: '',
        startDate: '',
        endDate: ''
    }

    handleChange = (e) => 
        this.setState({[e.target.name]: e.target.value})

    submitSingleDate = () =>
        this.props.history.push(`/result/${this.state.singleDate}`)

    submitDateRange = () =>
        this.props.history.push(`/result/startDate/${this.state.startDate}/endDate/${this.state.endDate}`)


    render() {
        return(
  <>
<body style={{minHeight: '100%'}, {backgroundColor: "#F0FFFF"}}>

            <header>
                <NavBarComponent/>
</header>
   <div className="Container-fluid  " style={{backgroundColor: "#F0FFFF"},{paddingBottom: 400}}>
                <h3 className="d-flex justify-content-center inline" style={{paddingBottom: 20}}>

                </h3>

                <Form className="d-flex justify-content-center inline">
                    <h3>
                                      &nbsp;&nbsp; Select Date &nbsp;&nbsp;

                      </h3>
                     <FormGroup className="mb-2 mr-sm-2 mb-sm-0  " style={{paddingBottom: 20}}>
                       <Label for="exampleEmail"  className="mr-sm-2t" style={{textAlign:'center'}}>

                       <Input type="date" bsSize="lg" placeholder="10-21-2015"  name="singleDate"
                                            value={this.state.singleDate}
                                        onChange={this.handleChange}/>
                                        </Label>
&nbsp;&nbsp;
                                 <button className="btn btn-danger fa fa-search"

                                                    onClick={this.submitSingleDate}>

                                            </button>

                     </FormGroup>
</Form>

<Form className="d-flex justify-content-center inline">
   <h3 style={{textAlign:'right'}}>

                    &nbsp;&nbsp;Date Range&nbsp;&nbsp;
</h3>
<FormGroup  className="mb-2 mr-sm-2 mb-sm-0 inline" style={{paddingBottom: 20}}>
                       <Label for="exampleEmail"  className="mr-sm-2" >


                       <Input type="date" bsSize="lg" placeholder="01-01-2020"  name="startDate"
                                            value={this.state.startDate}
                                        onChange={this.handleChange}/>
                                        </Label>
                                           to&nbsp;&nbsp;
                                   <Label for="exampleEmail"  className="mr-sm-2">

                               <Input type="date" bsSize="lg" placeholder="02-01-2020"  name="endDate"
                                         value={this.state.endDate}
                                  onChange={this.handleChange}/>
                                                                         </Label>
  <button className="btn btn-danger fa fa-search"
                                                                         onClick={this.submitDateRange}>

                                                                 </button>
                     </FormGroup>

                     </Form>

                     </div>
                     </body>
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
 </>
               )
               }
}
export default SearchComponent