import React from 'react';
import ApodService from '../services/ApodService'

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
            <div>
                <img src={this.state.apod.url}/>
                <h1>{this.state.apod.title}</h1>
                <h2>{this.state.apod.date}</h2>
                <p>{this.state.apod.explanation}</p>
            </div>
        )
    }
}

export default DetailsComponent