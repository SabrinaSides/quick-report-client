import React, { Component } from 'react';
import ReportContext from '../ReportContext';
import { Link } from 'react-router-dom'
import '../App.css';

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
          <li>Age: {chosenReport.age}</li>
          <li>Gender: {chosenReport.gender}</li>
          <li>Diagnosis: {chosenReport.diagnosis}</li>
          <li>Allergies: {chosenReport.allergies}</li>
          <li>Code Status: {chosenReport.code_status}</li>

          <h3>Neuro:</h3>
          <li>Alert and Oriented: {chosenReport.A_O}</li>
          <li>Pupils: {chosenReport.pupils}</li>
          <li>Other Neuro: {chosenReport.other_neuro}</li>

          <h3>Cardiac:</h3>
          <li>Rhythm: {chosenReport.heart_rhythm}</li>
          <li>Blood Pressure: {chosenReport.BP}</li>
          <li>Edema: {chosenReport.edema}</li>
          <li>Other Cardiac: {chosenReport.other_cardiac}</li>

          <h3>Respiratory:</h3>
          <li>Lung Sounds: {chosenReport.lung_sounds}</li>
          <li>Oxygen Requirement: {chosenReport.oxygen}</li>
          <li>Other Respiratory: {chosenReport.other_resp}</li>

          <h3>GI/GU</h3>
          <li>Last BM: {chosenReport.last_bm}</li>
          <li>GU: {chosenReport.gu}</li>
          <li>Other GI/GU: {chosenReport.other_gi_gu}</li>

          <h3>Other</h3>
          <li>Skin: {chosenReport.skin}</li>
          <li>IV Access: {chosenReport.IV_access}</li>
          <li>Additinal Report: {chosenReport.additional_report}</li>
        </ul>
       
      </div>
    ) : (
      <div />
    );
  }
}

export default ReportPage;
