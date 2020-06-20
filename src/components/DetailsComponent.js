import React from 'react';
import ApodService from '../services/ApodService'
import {Link} from "react-router-dom";
import postService from "../services/PostService";
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
    postService.createPost(
      this.state.date)
      .then(status => this.setEditing(false))


    render() {
        return(
            <div className="container">
            <Link to="/home">
                      <i class="fa fa-home fa-2x float-right" aria-hidden="true"></i>
                           </Link>
                           {!this.state.editing &&
                                   <button class="fa fa-share fa-2x " aria-hidden="true"
                                      onClick={() => this.setEditing(true)}>
                                       </button>

                                     }
                                     {
                                       this.state.editing &&
                                       <span>
                                        <input
                             className="form-control"
                             placeholder="add a caption"
                               onChange={(event) => this.savePostTitle(event.target.value)}

                            />
                                         <button className="btn btn-warning"onClick={this.Post} >
                                           Post </button>
                                         <button
                                           className="btn btn-danger"
                                           onClick={
                                             () => this.setEditing(false)}>
                                           Delete</button>
                                       </span>
                                     }


                <img  className="rounded mx-auto d-block" src={this.state.apod.url} alt="picture" height='500px'/>
                <h1>{this.state.apod.title}</h1>
                <h2>{this.state.apod.date}</h2>
                <p>{this.state.apod.explanation}</p>

            </div>
        )
    }
}

export default DetailsComponent