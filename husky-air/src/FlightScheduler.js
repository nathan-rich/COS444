import React, { Component } from 'react';
import './FlightScheduler.css';

class FlightScheduler extends Component {

    constructor (props) {
        super(props);
        this.state = {
            selectedRow : 0,
        }
    }

    selectRow(index) {
        this.setState({
            selectedRow: index
        })
    }

    render() {
        return (
            <div className="content-body">
                <div className="content-row">
                    <div>
                        <button className="btn-default">View All Flights</button>
                    </div>
                </div>
                <hr/>
                <h3>Schedule a Flight</h3>
                <div className="content-row">
                    <div className="content-field">
                        <label className="content-label">Flight Type</label>
                        <select>
                            <option value="0">Husky Air</option>
                            <option value="1">Pilot Angels/Volunteer</option>
                        </select>
                    </div>
                    <div className="content-field">
                        <label className="content-label">Date</label>
                        <input type="date"/>
                    </div>
                </div>
                <div className="content-row">
                    <div className="content-field">
                        <label className="content-label">Source</label>
                        <input type="text" placeholder="PWM"/>
                    </div>
                    <div className="content-field">
                        <label className="content-label">Destination</label>
                        <input type="text" placeholder="JFK"/>
                    </div>
                    <div className="content-field">
                        <label className="content-label">Distance:</label>
                        N/A
                    </div>
                </div>
                <label>Select a Pilot</label>
                <div className="content-row">
                <table className="pilot-table">
                    <tr style={{background: "lightgrey"}}>
                        <td>Name</td><td>Number of Flights</td><td>Last Flight</td><td>Miles Flown</td><td>Preferred Number</td>
                    </tr>
                    <tr className={this.state.selectedRow == 1 ? "row-selected" : "pilot-row"} onClick={this.selectRow.bind(this, 1)}>
                        <td>John Smith</td><td>14</td><td>09-02-2018</td><td>2456</td><td>(207) 444-4444</td>
                    </tr>
                    <tr className={this.state.selectedRow == 2 ? "row-selected" : "pilot-row"} onClick={this.selectRow.bind(this, 2)}>
                        <td>Sam Murica</td><td>2</td><td>08-23-2018</td><td>690</td><td>(207) 867-5309</td>
                    </tr>
                </table>
                </div>
                <div className="content-row-notes">
                    <label>Notes</label>
                    <textarea style={{width: "100%"}}/>              
                </div>
            </div>

        )
    }
}

export default FlightScheduler