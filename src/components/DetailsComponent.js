import React from 'react';
import ApodService from '../services/ApodService'
import {Link} from "react-router-dom";
import postService from "../services/PostService";
import {Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

class DetailsComponent extends React.Component {
    state = {
        date: this.props.match.params.date,
        apod: '',
        editing: false,
    }
    setEditing = (editing) =>
        this.setState({editing: editing})

    componentDidMount() {
        ApodService.findApodByDate(this.state.date)
            .then(apodDetails =>
                this.setState({
                    apod: apodDetails
                }))
    }

    post = () =>
         postService.createPost({apod: this.state.date, caption: this.state.caption})
           .then(status => this.setEditing(false))


    render() {
        return (

            <Table className="container">
            <Thead>
                                    <Tr>
              <Th>
               <Link to="/home">
                    <i className="fa fa-home fa-2x float-right" aria-hidden="true"/>
                </Link>
                 </Th>
                     </Tr>
                     </Thead>
                {!this.state.editing &&
                <button className="fa fa-share fa-2x " aria-hidden="true"
                        onClick={() => this.setEditing(true)}>
                </button>

                }

                {
                    this.state.editing &&
                    <span>
                                       <input className="form-control"
                                         placeholder="add a caption"
                                          onChange={(event) => {
                                                       const newCaption = event.target.value
                                       this.setState({caption: newCaption})
                               }}
                                                                               value={this.state.caption}/>
                                         <button className="btn btn-warning" onClick={this.Post}>
                                           Post </button>
                                         <button
                                             className="btn btn-danger"
                                             onClick={
                                                 () => this.setEditing(false)}>
                                           Delete</button>
                                       </span>
                }

<Tbody>
                <img className="rounded mx-auto d-block" src={this.state.apod.url} alt="picture" height='500px'/>
                <h1>{this.state.apod.title}</h1>
                <h2>{this.state.apod.date}</h2>
                <h6>{this.state.apod.explanation}</h6>
                </Tbody>
 </Table>

        )
    }
}

export default DetailsComponent