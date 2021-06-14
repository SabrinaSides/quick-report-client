import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ReportContext from '../ReportContext';
import './ReportTabs.css'

class ReportTabs extends Component {
    static contextType = ReportContext;

    render(){
        const {reports} = this.context;        
    return (
        <div className='report-tabs'>
          <ul>
            {reports.map((report) => {
            return <li key={report.pt_id} className='folder-report-tab'><Link to={`/report/${report.pt_id}`} className='text-link'>Room {report.room_number}, {report.pt_initials}</Link></li>;
          })}
          </ul>
        </div>
    )
        }
}

export default ReportTabs
