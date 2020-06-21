import React from "react";
import {Link} from "react-router-dom";
import PostService from "../services/PostService";
import ProfilePostComponent from "./ProfilePostComponent";

import  "./Footer.css";
export default class ProfilePostComponent extends React.Component {
    state = {
        posts:[]
    }

    componentDidMount() {
      this.setState.posts = PostService.findPostForUser(uid)
    }

 render() {
        return(
            <div>
                <table className='table'>
                    <thead>
                        <tr>

                            <th>image snapshot</th>

                            <th>
                            <Link to="/home">
                                   <i class="fa fa-home float-right btn-sm" aria-hidden="true"></i>
                                   </Link>
                                   </th>
                        </tr>
                    </thead>
                    <tbody>
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
