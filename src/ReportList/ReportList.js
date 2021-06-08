import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReportContext from '../ReportContext';
import './ReportList.css';

class ReportList extends Component {
  static contextType = ReportContext;

  render() {
    const { reports } = this.context;

    return (
      <div className='report-list'>
        <h2> Report Collection </h2>
        <ul className='report-tabs'>
          {reports.map((report) => {
            return <li key={report.pt_id} className='room-tab'><Link to={`/report/${report.pt_id}`}>{report.room_number}</Link></li>;
          })}
        </ul>

        <div className="folder-container">
          <Link to ='/add-report'>+ Add New Report</Link>
          <h3> Choose a tab to see the full patient report</h3>
        </div>
      </div>
    );
  }
}

export default ReportList;
