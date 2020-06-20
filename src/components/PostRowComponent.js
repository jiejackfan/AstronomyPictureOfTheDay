import React from "react";
import {Link} from "react-router-dom";

export default class PostRowComponent extends React.Component {


    render() {
        return (
            <tr>
                <td>{this.props.post.caption}</td>
                <td>{this.props.post.apod}</td>
            </tr>

        );
    }
}