import React from "react";
import {Link} from "react-router-dom";
import PostService from "../services/PostService";
import PostRowComponent from "./PostRowComponent";

import  "./Footer.css";
export default class ProfilePostComponent extends React.Component {
    state = {
        posts:[]
    }

    componentDidMount() {
        PostService.findPostForUser(this.props.match.params.uid)
          .then(listOfPosts=>{
              console.log(listOfPosts)
              this.setState({posts:listOfPosts})
              /*console.log(this.state.posts)*/
          })

    }


 render() {
        return(
            <div>
                <table className='table'>
                    <thead>
                        <tr>

                            <th>List of Saved Post By {this.props.user.username}</th>

                            <th>
                            <Link to="/home">
                                   <i className="fa fa-home float-right btn-sm" aria-hidden="true"/>
                                   </Link>
                                   </th>
                        </tr>
                    </thead>
                    <tbody class="justify ">
                            {this.state.posts.map(post =>
                                <PostRowComponent

                                    key={post._id}
                                    post={post}/>

                            )}
                    </tbody>
                </table>
            </div>
        )
    }
}
