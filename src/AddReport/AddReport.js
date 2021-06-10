import React, { Component } from 'react';
import ReportContext from '../ReportContext';

class AddReport extends Component {
  state = {
    room_number: '',
    pt_initials: '',
    diagnosis: '',
    allergies: '',
    A_O: '',
    pupils: '',
    heart_rhythm: '',
    BP: '',
    edema: '',
  };

  static contextType = ReportContext;

  static defaultProps = {
    addReport: () => {}
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  //need to update app state
  handleSubmit = event => {
      event.preventDefault();
      const { room_number, pt_initials, diagnosis, allergies } = this.state
      const newReport = { room_number, pt_initials, diagnosis, allergies }
    this.context.addReport(newReport)
  }

  render() {
    return (
      <div className="full-report-container">
        <div className="folder-report-tab">
          <p>New Patient</p>
        </div>
        <div className="folder-body">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="room_number">Room Number: (required)</label>
            <input
              type="text"
              name="room_number"
              id="room_number"
              maxLength="8"
              value={this.state.room_number}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="pt_initials">Patient Initials: (required)</label>
            <input
              type="text"
              name="pt_initials"
              id="pt_initials"
              maxLength="3"
              value={this.state.pt_initials}
              onChange={this.handleChange}
            />

            <label htmlFor="diagnosis">Diagnosis:</label>
            <input
              type="text"
              name="diagnosis"
              id="diagnosis"
              value={this.state.diagnosis}
              onChange={this.handleChange}
            />

            <label htmlFor="allergies">Allergies:</label>
            <input
              type="text"
              name="allergies"
              id="allergies"
              value={this.state.allergies}
              onChange={this.handleChange}
            />
            <input type='submit' value='Submit' />
          </form>
        </div>
      </div>
    );
  }
}

export default AddReport;
