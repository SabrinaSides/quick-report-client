import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReportContext from '../ReportContext';

class EditReport extends Component {
  state = {
    ...this.context.reports.find((report) => report.pt_id === this.props.match.params.pt_id)
  };

  static contextType = ReportContext;

  static defaultProps = {
    addReport: () => {},
    history: {
      goBack: () => {}
    }
  }

  //finding chosen report (from route parameter) and setting state to single chosen report
  componentDidMount(){
    // const { pt_id } = this.props.match.params;
    // const { report } = this.state
    // const findReport = (report, pt_id) => 
    //   report.find((report) => report.pt_id === pt_id);

    // const chosenReport = findReport(report, pt_id)

    // this.setState({
    //   report: chosenReport
    // })
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
    const { pt_id, room_number, pt_initials, diagnosis, allergies } = this.state
    const editedReport = { pt_id, room_number, pt_initials, diagnosis, allergies }
    this.context.editReport(editedReport)
    console.log('editedreport', editedReport)
    this.props.history.goBack()
  }

  render() {
    const { room_number, pt_initials, diagnosis, allergies } = this.state

    return (
      <div className="full-report-container">
        <div className="folder-report-tab">
          <p>Edit Report: {room_number}</p>
        </div>
        <div className="folder-body">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="room_number">Room Number: (required)</label>
            <input
              type="text"
              name="room_number"
              id="room_number"
              maxLength="8"
              value={room_number}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="pt_initials">Patient Initials: (required)</label>
            <input
              type="text"
              name="pt_initials"
              id="pt_initials"
              maxLength="3"
              value={pt_initials}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="diagnosis">Diagnosis:</label>
            <input
              type="text"
              name="diagnosis"
              id="diagnosis"
              value={diagnosis}
              onChange={this.handleChange}
            />

            <label htmlFor="allergies">Allergies:</label>
            <input
              type="text"
              name="allergies"
              id="allergies"
              value={allergies}
              onChange={this.handleChange}
            />
            <input type='submit' value='Submit' />
            <button><Link to='/report-list'>Cancel</Link></button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditReport;