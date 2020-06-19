import React from "react";
import {Link} from "react-router-dom";

export default class PostRowComponent extends React.Component {


    render() {
        return (
     <td><img src={this.props.posts.url} height='200px' width='250px' alt='picture'/></td>

        );
    }
}