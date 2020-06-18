import React from 'react';
import NavBarComponent from "./NavBarComponent";
import Background from '../resources/pic.jpg';

class SearchComponent extends React.Component {

    state = {
        singleDate: '',
        startDate: '',
        endDate: ''
    }

    handleChange = (e) => 
        this.setState({[e.target.name]: e.target.value})

    submitSingleDate = () =>
        this.props.history.push(`/apods/${this.state.singleDate}`)

    submitDateRange = () =>
        this.props.history.push(`/apods-date-range/${this.state.startDate}/${this.state.endDate}`)

    render() {
        return(
            <div >
                <NavBarComponent/>
                <form>
                    <h5 className="d-flex justify-content-center">Display Astronomy Picture of a Selected Date</h5>
                    <label className="d-flex justify-content-center">
                        Search by a single date: 
                        <input type="date"
                               placeholder="10-21-2015"
                               name="singleDate"
                               value={this.state.singleDate}
                               onChange={this.handleChange}/>

                    <button className="btn btn-danger float-right"
                            onClick={this.submitSingleDate}>
                                Search
                    </button>
                     </label>
                </form>
                <form>
                    <h5 className="d-flex justify-content-center">Display Astronomy Picture of the Day for a Range of Dates</h5>
                    <label className="d-flex justify-content-center">
                        Start date:
                        <input type="date"
                               placeholder="01-01-2020"
                               name="startDate"
                               value={this.state.startDate}
                               onChange={this.handleChange}/>
                    </label>
                    <label className="d-flex justify-content-center">
                        End date:
                        <input type="date"
                               placeholder="02-01-2020"
                               name="endDate"
                               value={this.state.endDate}
                               onChange={this.handleChange}/>
                    </label>
                    <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center"
                            }}
                          >
                    <button style={{justifyContent: 'center'}} className="btn btn-danger"
                            onClick={this.submitDateRange}>
                                Search
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchComponent