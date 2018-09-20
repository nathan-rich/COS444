import React, { Component } from 'react';
import './PilotManagement.css';

class PilotManagement extends Component {

    render() {
        return (
            <div className="content-body">
                <div className="content-row">
                    <div className="search-field">
                        <input type="text" className="search-input" placeholder="First"></input>
                        <input type="text" className="search-input" placeholder="Last"></input>
                        <button className="btn-default" type="submit">Search</button>
                    </div>
                    <div className="create-field">
                        <button className="btn-default btn-create"> Create New</button>
                    </div>
                </div>
                <hr/>
                <h3>Personal Information</h3>
                <div className="content-row">
                    <div className="content-field">
                        <label className="content-label" >First Name</label>
                        <input type="text" placeholder="John"></input>
                    </div>
                    <div className="content-field">
                        <label className="content-label">Last Name</label>
                        <input type="text" placeholder="Smith"></input>
                    </div>
                </div>
                <div className="content-row">
                    <div className="content-field">
                        <label className="content-label">Home Number</label>
                        <input type="text" placeholder="(XXX) XXX-XXXX"></input>
                    </div>
                    <div className="content-field">
                        <label className="content-label" >Cell Number</label>
                        <input type="text" placeholder="(XXX) XXX-XXXX"></input>
                    </div>
                    <div className="content-field">
                        <label className="content-label">Work Number</label>
                        <input type="text" placeholder="(XXX) XXX-XXXX"></input>
                    </div>
                </div>
                <div className="content-row">
                    <div className="content-field">
                        <label className="content-label">Employee Type</label>
                        <select>
                            <option value="0">Husky Air</option>
                            <option value="1">Volunteer/Pilot Angels</option>
                        </select>
                    </div>
                </div>
                <div className="content-row">
                    <table>
                        <tr className="week-row">
                            <td className="week-cell">
                                Sunday
                            </td>
                            <td className="week-cell">
                                Monday
                            </td>
                            <td className="week-cell">
                                Tuesday
                            </td>
                            <td className="week-cell">   
                                Wednesday
                            </td>
                            <td className="week-cell">
                                Thursday
                            </td>
                            <td className="week-cell">
                                Friday
                            </td>
                            <td className="week-cell">
                                Saturday
                            </td>
                        </tr>
                        <tr className="week-row">
                            <td className="week-cell">
                                <input type="text" style={{width: "100%"}}/>
                            </td>
                            <td className="week-cell">
                                <input type="text" style={{width: "100%"}}/>
                            </td>
                            <td className="week-cell">
                                <input type="text" style={{width: "100%"}}/>
                            </td>
                            <td className="week-cell">
                                <input type="text" style={{width: "100%"}}/>
                            </td>
                            <td className="week-cell">
                                <input type="text" style={{width: "100%"}}/>
                            </td>
                            <td className="week-cell">
                                <input type="text" style={{width: "100%"}}/>
                            </td>
                            <td className="week-cell">
                                <input type="text" style={{width: "100%"}}/>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="content-row-notes">
                    <label>Notes</label>
                    <textarea style={{width: "100%"}}/>              
                </div>
                <hr/>
                <h3>Airplane Information</h3>
                <div className="content-row">
                    <div className="content-field">
                        <label className="content-label">Model</label>
                        <input type="text"/>
                    </div>
                    <div className="content-field">
                        <label className="content-label">Max Weight</label>
                        <input type="text"/>
                    </div>
                    <div className="content-label">
                        <label className="content-label">Tank Size</label>
                        <input type="text"/>
                    </div>
                </div>
                <div className="content-row-notes">
                    <label>Safety Equipment and Features</label>
                    <textarea style={{width: "100%"}}/>              
                </div>
            </div>
        )
    }
}

export default PilotManagement