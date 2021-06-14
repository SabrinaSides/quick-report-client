import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReportContext from '../ReportContext';
import ReportTabs from '../ReportTabs/ReportTabs'
import '../App.css';

class ReportList extends Component {
  static contextType = ReportContext;

  render() {
    const { reports } = this.context;

    return (
      <div className='report-list'>
        <h2> Report Collection </h2>
        <ReportTabs />
        {/* <ul className='report-tabs'>
          {reports.map((report) => {
            return <li key={report.pt_id} className='folder-report-tab'><Link to={`/report/${report.pt_id}`} className='text-link'>Room {report.room_number}, {report.pt_initials}</Link></li>;
          })}
        </ul> */}

        <div className="folder-body">
          <Link to ='/add-report' className='text-link'>+ Add New Report</Link>
          <h3> Choose a tab to see the full patient report</h3>
        </div>
      </div>
    );
  }
}

export default ReportList;
