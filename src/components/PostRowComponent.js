import React from "react";
import {Link} from "react-router-dom";
import ApodService from "../services/ApodService";
import UserService from "../services/UserService";
import CommentService from "../services/CommentService"
import PostService from "../services/PostService";

export default class PostRowComponent extends React.Component {

    state={
        apod:'',
        user:'',
        newComment:''
    }

    componentDidMount() {
        ApodService.findApodByDate(this.props.post.apod)
            .then(apodDetails =>
                this.setState({
                    apod: apodDetails
                })
            )

/*        UserService.fetchUser(this.props.post.user.id)
            .then(user =>
                this.setState({
                    user: user
                })
            )*/
    }

    render() {
        return (
            <tr  className="table col-sm-3">
                <td  >

                    <img className="rounded mx-auto d-block" src={this.state.apod.url} alt="picture" height='400px' width='500px'/>
                    console.log(this.props.post.id)
                     <button className='btn btn-danger float-right' onClick={()=>PostService.deletePostById(this.props.post.id)}>
                                            <i className="fa fa-trash" aria-hidden="true"/>
                                        </button>
                    <h3  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>APOD title: {this.state.apod.title}</h3>
                    <h3  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>APOD date: {this.state.apod.date}</h3>
                    <h3  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        User Caption:  {this.props.post.caption}
                    </h3>

                    <p > Comments</p>
                    <ol>
                        <div>

                            {
                                this.props.post.comments.map(comment=> {

                                    return <li key={comment.id}>
                                        {comment.user.id} commented "{comment.text}"
                                    </li>

                                })

                            }
                        </div>
                    </ol>
                    <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} className='form-group row'>
                        <input className='col-5 form-control'
                               placeholder='new comment'
                               onChange={e=>this.setState({newComment:e.target.value})}
                               value={this.state.newComment}
                              />
                        <button className='btn btn-primary'
                                onClick={()=>CommentService.createNewComment(this.props.post.id,{
                                    text:this.state.newComment,
                                    user:this.props.post.user,
                                    post:this.props.post,
                                })}>
                            <i className="fa fa-plus" aria-hidden="true"/>
                        </button>
                        <button className='btn btn-danger'>
                            <i className="fa fa-trash" aria-hidden="true"/>
                        </button>
                    </div>

                    <hr/>
                </td>

            </tr>

        );
    }
}
