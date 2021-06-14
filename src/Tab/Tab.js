import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ReportContext from '../ReportContext';

class Tab extends Component {
    static contextType = ReportContext;

    render(){
        const {reports} = this.context;        
    return (
        <div className='report-tabs'>
            {reports.map((report) => {
            return <li key={report.pt_id} className='folder-report-tab'><Link to={`/report/${report.pt_id}`} className='text-link'>Room {report.room_number}, {report.pt_initials}</Link></li>;
          })}
        </div>
    )
        }
}

export default Tab
