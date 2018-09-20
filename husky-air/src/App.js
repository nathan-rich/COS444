import React, { Component } from 'react';
import FlightScheduler from './FlightScheduler';
import PilotManagement from './PilotManagement';
import './App.css';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      showingFlightScheduler : true
    }

    this.changePanel = this.changePanel.bind(this);
  }

  changePanel (newValue) {
    this.setState({
      showingFlightScheduler : newValue
    })
  }

  render() {
    return (
      <div className="App">
        <div className="main-panel">
          <div className="title-panel">
            <h2 className="title">Husky Air</h2>
          </div>
          <div className="header">
            <div className={this.state.showingFlightScheduler ? "selected-div sd-left" : "selectable-div sd-left"} onClick={this.changePanel.bind(this, true)}>
              Flight Scheduler
            </div>
            <div className={!this.state.showingFlightScheduler ? "selected-div sd-right" : "selectable-div sd-right"} onClick={this.changePanel.bind(this, false)}>
              Pilot Management
            </div>
          </div>
          <div className="content-panel">
            {this.state.showingFlightScheduler ? <FlightScheduler/> : <PilotManagement/>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
