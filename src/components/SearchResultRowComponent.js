import React from "react";
import {Link} from "react-router-dom";

export default class SearchResultRowComponent extends React.Component {
    goDetailPage = () =>
      console.log(this.props)

    render() {
        return (
            <tr>
                <td>{this.props.apod.title}</td>
                <td>{this.props.apod.date}</td>
                <td><img src={this.props.apod.url} height='200px' alt='picture'/></td>
                <td>
                        <Link to={`/apods/${this.props.apod.date}`}>
                            details
                        </Link>
                </td>
            </tr>
        );
    }
}