import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReportContext from '../ReportContext';
import './ReportList.css';

class ReportList extends Component {
  static contextType = ReportContext;

  static defaultProps = {
    reports: []
  }

  render() {
    const { reports } = this.context;

    return (
      <div className='report-list'>
        <h2> Report Collection </h2>
        <ul className='report-tabs'>
          {reports.map((report) => {
            return <li key={report.pt_id} className='folder-report-tab' onClick={() => this.props.history.push(`/reports/${report.pt_id}`)}>Room {report.room_number}, {report.pt_initials}</li>;
          })}
        </ul>

        <div className="folder-body folder-body-report-list">
          <h3> Choose a tab to see the full patient report</h3>
          <h3>OR</h3>
          <button id='add-btn' onClick={() => this.props.history.push('/add-report')}>+ Add New Report</button>
        </div>
      </div>
    );
  }
}

export default ReportList;
