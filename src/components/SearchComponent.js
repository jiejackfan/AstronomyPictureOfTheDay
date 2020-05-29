import React from 'react';

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
        console.log(this.state.startDate + ' ' + this.state.endDate)

    render() {
        return(
            <div>
                <form>
                    <label>
                        Search by a single date: 
                        <input type="date" 
                               placeholder="10-21-2015"
                               name="singleDate"
                               value={this.state.singleDate}
                               onChange={this.handleChange}></input>
                    </label>
                    <button className="btn btn-danger"
                            onClick={this.submitSingleDate}>
                                Search
                    </button>
                </form>
                <form>
                    <label>
                        Start date:
                        <input type="date"
                               placeholder="01-01-2020"
                               name="startDate"
                               value={this.state.startDate}
                               onChange={this.handleChange}></input>
                    </label>
                    <label>
                        End date:
                        <input type="date"
                               placeholder="02-01-2020"
                               name="endDate"
                               value={this.state.endDate}
                               onChange={this.handleChange}></input>
                    </label>
                    <button className="btn btn-danger"
                            onClick={this.submitDateRange}>
                                Search
                    </button>
                </form>
            </div>
        )
    }
}

export default SearchComponent