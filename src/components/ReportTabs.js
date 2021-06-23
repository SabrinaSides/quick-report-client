import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReportContext from '../ReportContext';
import '../styles/ReportTabs.css';

class ReportTabs extends Component {
  static contextType = ReportContext;

  static defaultProps = {
    reports: [],
  };

  render() {
    const { reports} = this.context;

    return (
        <ul className='report-tabs'>
          {reports.map((report) => {
            return (
              <li
                key={report.pt_id}
                className='folder-report-tab'
                style={{
                  backgroundColor:
                    report.pt_id === this.props.ptId ? 'rgb(206, 73, 73)' : '',
                }}
              >
                <Link to={`/reports/${report.pt_id}`} className='text-link'>
                  Room {report.room_number}, {report.pt_initials}
                </Link>
              </li>
            );
          })}
        </ul>
    );
  }
}

export default ReportTabs;
