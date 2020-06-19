import React from 'react';
import ApodService from '../services/ApodService'
import {Link} from "react-router-dom";
class DetailsComponent extends React.Component {
    state = {
        date: this.props.match.params.date,
        apod: ''
    }

    componentDidMount() {
        ApodService.findApodByDate(this.state.date)
        .then(apodDetails =>
            this.setState({
                apod: apodDetails
            }))
    }

    render() {
        return(
            <div className="container">
            <Link to="/home">
                      <i class="fa fa-home fa-2x float-right" aria-hidden="true"></i>
                           </Link>
                <img  className="rounded mx-auto d-block" src={this.state.apod.url} alt="picture" height='500px'/>
                <h1>{this.state.apod.title}</h1>
                <h2>{this.state.apod.date}</h2>
                <p>{this.state.apod.explanation}</p>

            </div>
        )
    }
}

export default DetailsComponent