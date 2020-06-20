import React from "react";
import {Link} from "react-router-dom";
import postService from "../services/PostService";
export default class SearchResultRowComponent extends React.Component {
    state = {
        date: this.props.date,
        apod: '',
         editing: false,
    }
      setEditing = (editing) =>
        this.setState({editing: editing})

 post = () =>
    postService.createPost(
      this.state.date)
      .then(status => this.setEditing(false))


    goDetailPage = () =>
      console.log(this.props)

    render() {
        return (
            <tr>
                <td>{this.props.apod.title}</td>
                <td>{this.props.apod.date}</td>
                <td><img src={this.props.apod.url} height='200px' width='250px' alt='picture'/></td>
                <td>
                        <Link to={`/result/${this.props.apod.date}`}>
                           <button className="fa fa-info-circle fa-2x btn-danger">
                           </button>
                        </Link>
                </td>
                <td>
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
                                                         <button className="btn btn-warning"onClick={this.submitPost} >
                                                           Post </button>
                                                         <button
                                                           className="btn btn-danger"
                                                           onClick={
                                                             () => this.setEditing(false)}>
                                                           Delete</button>
                                                       </span>
                                                     }







                </td>
            </tr>
        );
    }
}