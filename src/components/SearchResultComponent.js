import React from "react";
import ApodService from "../services/ApodService";
import SearchResultRowComponent from "./SearchResultRowComponent";

export default class SearchResultComponent extends React.Component {
    state = {
        startDate:this.props.match.params.startDate,
        endDate:this.props.match.params.endDate,
        apods:[]
    }

    componentDidMount() {
        console.log(this.state.startDate, this.state.endDate)
        ApodService.findApodByStartEndDate(this.state.startDate, this.state.endDate)
            .then(list => this.setState({
                apods:list
            }))

    }


    render() {
        return(
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>image snapshot</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.state.apods.map(apod =>
                                <SearchResultRowComponent
                                    apod={apod} key={apod.date}/>
                            )}
                    </tbody>
                </table>
            </div>
        )
    }
}