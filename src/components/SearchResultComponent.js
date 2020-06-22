import React from "react";
import ApodService from "../services/ApodService";
import SearchResultRowComponent from "./SearchResultRowComponent";
import {Link} from "react-router-dom";
import {Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
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
                <Table className='table'>
                    <Thead>
                        <Tr>
                            <Th>Title</Th>
                            <Th>Date</Th>
                            <Th>image snapshot</Th>
                            <Th>Details</Th>
                            <Th>
                            <Link to="/home">
                                   <i class="fa fa-home float-right btn-sm" aria-hidden="true"></i>
                                   </Link>
                                   </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                            {this.state.apods.map(apod =>
                                <SearchResultRowComponent
                                    apod={apod} key={apod.date}/>
                            )}
                    </Tbody>
                </Table>
            </div>
        )
    }
}