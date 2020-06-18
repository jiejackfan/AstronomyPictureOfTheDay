import React from 'react';
import NavBarComponent from "./NavBarComponent";
import Background from './pic.jpg';
import { Col,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { IconName } from "react-icons/fa";
// reactstrap components
import {Container } from "reactstrap";

class SearchComponent extends React.Component {


    state = {
        singleDate: '',
        startDate: '',
        endDate: ''
    }

    handleChange = (e) => 
        this.setState({[e.target.name]: e.target.value})

    submitSingleDate = () =>
        this.props.history.push(`/apods/${this.state.singleDate}`)

    submitDateRange = () =>
        this.props.history.push(`/apods-date-range/${this.state.startDate}/${this.state.endDate}`)


    render() {
        return(
  <>

            <div className="Container-fluid" style={{backgroundColor: 'white'}} >
                <NavBarComponent/>

                <h3 className="d-flex justify-content-center" style={{paddingBottom: 20}}> Display Astronomy Picture

                </h3>

                <Form className="d-flex justify-content-center">
                     <FormGroup className="mb-2 mr-sm-2 mb-sm-0 " style={{paddingBottom: 20}}>
                       <Label for="exampleEmail"  className="mr-sm-2 ">Selected Date :&nbsp;&nbsp;


                       <Input type="date" bsSize="lg" placeholder="10-21-2015"  name="singleDate"
                                            value={this.state.singleDate}
                                        onChange={this.handleChange}/>
                                        </Label>
                                 <button className="btn btn-danger fa fa-search"
                                                    onClick={this.submitSingleDate}>

                                            </button>

                     </FormGroup>

                      <FormGroup>


    </FormGroup>
    <break>
        </break>
<FormGroup  className="mb-2 mr-sm-2 mb-sm-0" style={{paddingBottom: 20}}>
                       <Label for="exampleEmail"  className="mr-sm-2">Date Range :&nbsp;&nbsp;


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
 </>
               )
               }
}
export default SearchComponent