import React from "react";
import {Link} from "react-router-dom";
import PostService from "../services/PostService";
import ProfilePostComponent from "./ProfilePostComponent";


import  "./Footer.css";
export default class ProfilePostComponent extends React.Component {
    state = {
        posts:[]
        uid : this.props.uid,
    }

      componentDidMount = () => {
          PostService.PostService(this.props.userId).then(posts =>
              this.setState({posts: posts})
          }))
      }
       componentDidUpdate = (prevProps, _prevState, _snapshot) => {
              if (this.props.userId !== prevProps.userId)
                  PostService.PostService(this.props.userId).then(posts =>
                    this.setState({posts: posts})
                  }))
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
                    {this.props.authenticatedUser ? (
                    this.state.posts.length > 0 ?
                            this.state.posts.map(post =>
                                <PostRowComponent

                                post={posts} key={post.uid}/>

                            )
                            :
                              <p>No recent activity to display.</p>)
                              :
                              (
             <p>Please <Link to='/login'>log in</Link> to view  users recent activity."</p>
                                              )
                            }
                    </tbody>
                </table>
            </div>
        )
    }
}
