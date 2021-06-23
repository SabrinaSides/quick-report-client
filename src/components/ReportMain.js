import React, { Component } from 'react';
import ReportTabs from './ReportTabs';
import '../styles/ReportMain.css';

class ReportMain extends Component {
  static defaultProps = {
    reports: [],
  };

  render() {
    return (
      <div className='report-Main'>
        <h2> Report Collection </h2>
        <ReportTabs />

        <div className='folder-body folder-body-report-main'>
          <h3> Choose a tab to see the full patient report</h3>
          <p>OR</p>
          <button
          className='add-btn'
            onClick={() => this.props.history.push('/add-report')}
          >
            + Add New Report
          </button>
        </div>
      </div>
    );
  }
}

export default ReportMain;
