import React from "react";
import {Link} from "react-router-dom";
import PostService from "../services/PostService";
import PostRowComponent from "./PostRowComponent";
import {Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import NavBarComponent from "./NavBarComponent";
import  "./Footer.css";
import Background from './pick.jpg';
export default class PostsComponent extends React.Component {
    state = {
        posts:[]
    }

    componentDidMount() {
        PostService.findAllPosts()
            .then(listOfPosts=>{
                /*console.log(listOfPosts)*/
                this.setState({posts:listOfPosts})
                /*console.log(this.state.posts)*/
            })

    }

 render() {
        return(
            <div className="container">
                <Table className='table '>
                    <Thead>
                        <Tr>

                            <Th>

  <font color={'white'}>
                    <h3  style={{backgroundImage: `url(${Background})`}}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    &nbsp;&nbsp;POSTS
                     <Link to="/home">
                     <i class="fa fa-home float-right btn-sm" aria-hidden="true"></i>
                     </Link>
                     </h3>
                      </font>
                            </Th>


                        </Tr>
                    </Thead>
                    <Tbody>
                            {this.state.posts.map(post =>
                                <PostRowComponent

                                key={post._id}
                                post={post}/>

                            )}
                    </Tbody>
                </Table>
            </div>
        )
    }
}
