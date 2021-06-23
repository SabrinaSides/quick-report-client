import React, { Component } from 'react';
import ReportTabs from './ReportTabs';
import '../styles/ReportList.css';

class ReportList extends Component {
  render() {
    return (
      <div className='report-list'>
        <h2> Report Collection </h2>
        <ReportTabs />

        <div className='folder-body folder-body-report-list'>
          <h3> Choose a tab to see the full patient report</h3>
          <h3>OR</h3>
          <button
            id='add-btn'
            onClick={() => this.props.history.push('/add-report')}
          >
            + Add New Report
          </button>
        </div>
      </div>
    );
  }
}

export default ReportList;
