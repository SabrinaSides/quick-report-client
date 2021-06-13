import React, { Component } from 'react';
import ReportContext from '../ReportContext';
import { Link } from 'react-router-dom'
import './ReportPage.css';

class ReportPage extends Component {
  static contextType = ReportContext;

  render() {
    const { reports } = this.context;
    const { pt_id } = this.props.match.params;


    const findReport = (reports, pt_id) =>
      reports.find((report) => report.pt_id === pt_id);

    const handleThisDelete = () => {
      this.context.deleteReport(chosenReport.pt_id);
      this.props.history.push('/report-list');
    };

    const chosenReport = findReport(reports, pt_id);

    return chosenReport ? (
      <div className="full-report-container">
        <div className='tab-and-back-btn'>
        <div className="folder-report-tab">
          <p>Room {chosenReport.room_number}</p>
        </div>
        <button className='back-btn' onClick={() => this.props.history.push('/report-list')}>
            Back
          </button>
          </div>
        <ul className="folder-body">
        <div className='report-buttons'>
        <button><Link to={`/edit-report/${chosenReport.pt_id}`}>Edit</Link></button>
        <button onClick={() => handleThisDelete()}>Delete</button>
        </div>
          <h3>Patient Info:</h3>
          <li>Room Number: {chosenReport.room_number}</li>
          <li>Patient Initials: {chosenReport.pt_initials}</li>
          <li>Diagnosis: {chosenReport.diagnosis}</li>
          <li>Allergies: {chosenReport.allergies}</li>

          <h3>Neuro:</h3>
          <li>Alert and Oriented: {chosenReport.A_O}</li>
          <li>Pupils: {chosenReport.pupils}</li>

          <h3>Cardiac:</h3>
          <li>Rhythm: {chosenReport.heart_rhythm}</li>
          <li>Blood Pressure: {chosenReport.BP}</li>
          <li>Edema: {chosenReport.edema}</li>

          <h3>Respiratory:</h3>
          <li></li>
        </ul>
       
      </div>
    ) : (
      <div />
    );
  }
}

export default ReportPage;
